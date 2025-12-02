import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { API_BASE } from "../config";

export default function CommentsSection({
  initialComments = [],
  onSendComment, // async function(text) => createdComment | boolean
  fetchComments, // async function() => comments[] (optional)
  placeId,
  user,
  token,
  commentKey = "restaurantId", // key to use in POST body (e.g. restaurantId or touristSpotId or touristId)
  endpoint = "http://localhost:3000/comment",
}) {
  const [comments, setComments] = useState(Array.isArray(initialComments) ? initialComments : []);
  const [authorsMap, setAuthorsMap] = useState({}); // userId -> profile
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // ---- Author fetching helper (hoisted function) ----
  async function ensureAuthorsForComments(list) {
    if (!Array.isArray(list) || list.length === 0) return;
    const ids = Array.from(new Set(list.map((c) => getCommentUserId(c)).filter(Boolean)));
    const missing = ids.filter((id) => !authorsMap[String(id)]);
    if (missing.length === 0) return;
    const fetchProfile = async (id) => {
      const candidates = [
        `${API_BASE}/profile/${id}`,
        `${API_BASE}/users/${id}`,
        `${API_BASE}/user/${id}`,
      ];
      for (const url of candidates) {
        try {
          const res = await fetch(url, { headers: token ? { Authorization: `Bearer ${token}` } : {}, mode: 'cors' });
          if (res && res.ok) {
            const json = await res.json().catch(() => null);
            return json && (json.user || json.data || json.profile || json || null);
          }
        } catch (e) {
          // ignore and try next
        }
      }
      return null;
    };

    try {
      const results = await Promise.all(missing.map((id) => fetchProfile(id)));
      const next = { ...authorsMap };
      missing.forEach((id, idx) => {
        const r = results[idx];
        if (r) next[String(id)] = r;
      });
      setAuthorsMap(next);
    } catch (e) {
      console.warn('[CommentsSection] ensureAuthorsForComments error', e);
    }
  }

  useEffect(() => {
    setComments(Array.isArray(initialComments) ? initialComments : []);
  }, [initialComments]);

  useEffect(() => {
    // auto-refresh comments when mounted or when placeId changes
    (async () => {
      if (!placeId) return;
      if (typeof fetchComments === "function") {
        try {
          setLoading(true);
          const data = await fetchComments();
          if (Array.isArray(data)) setComments(data);
        } catch (e) {
          console.warn("[CommentsSection] fetchComments error", e);
        } finally {
          setLoading(false);
        }
        return;
      }

      // default fetch: follow exactly the query params you supplied
      // GET should be called as either: /comment?restaurantId=... or /comment?touristId=...
      try {
        setLoading(true);
        if (!placeId) return;
        // map commentKey to the expected GET param names
        const q = commentKey === 'touristSpotId' ? 'touristId' : (commentKey || 'restaurantId');
        const url = `${endpoint}?${encodeURIComponent(q)}=${encodeURIComponent(placeId)}`;
        console.log('[CommentsSection] GET', url);
        const res = await fetch(url, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
        if (!res.ok) {
          console.warn('[CommentsSection] get failed', res.status, url);
        } else {
          const data = await res.json().catch(() => null);
          let list = [];
          if (Array.isArray(data)) {
            list = data;
          } else {
            list = data && (data.comments || data.data || data.results || []) || [];
          }
          // Filter to comments that belong to this placeId
          const matchesPlace = (c) => {
            if (!c) return false;
            const candidate = c[commentKey] ?? c[commentKey.replace(/Id$/,'_id')] ?? c.placeId ?? c.place_id ?? c.touristId ?? c.restaurantId ?? c.tourist_id ?? c.restaurant_id;
            return typeof candidate !== 'undefined' && String(candidate) === String(placeId);
          };
          const filtered = Array.isArray(list) ? list.filter(matchesPlace) : [];
          setComments(filtered);
          ensureAuthorsForComments(filtered);
        }
      } catch (e) {
        console.warn('[CommentsSection] fetch error', e);
      } finally {
        setLoading(false);
      }
    })();
  }, [placeId, fetchComments, commentKey, endpoint, token]);

  const refresh = async () => {
    if (typeof fetchComments === "function") {
      try {
        setLoading(true);
        const data = await fetchComments();
        if (Array.isArray(data)) setComments(data);
      } catch (e) {
        console.warn("[CommentsSection] fetchComments error", e);
      } finally {
        setLoading(false);
      }
      return;
    }

    // use default fetch logic: call only the exact param form the backend expects
    try {
      setLoading(true);
      if (!placeId) return;
      const q = commentKey === 'touristSpotId' ? 'touristId' : (commentKey || 'restaurantId');
      const url = `${endpoint}?${encodeURIComponent(q)}=${encodeURIComponent(placeId)}`;
      console.log('[CommentsSection] refresh GET', url);
      const res = await fetch(url, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
      if (!res.ok) {
        console.warn('[CommentsSection] refresh get failed', res.status, url);
      } else {
        const data = await res.json().catch(() => null);
        let list = [];
        if (Array.isArray(data)) list = data;
        else list = data && (data.comments || data.data || data.results || []) || [];
        const matchesPlace = (c) => {
          if (!c) return false;
          const candidate = c[commentKey] ?? c[commentKey.replace(/Id$/,'_id')] ?? c.placeId ?? c.place_id ?? c.touristId ?? c.restaurantId ?? c.tourist_id ?? c.restaurant_id;
          return typeof candidate !== 'undefined' && String(candidate) === String(placeId);
        };
        const filtered = Array.isArray(list) ? list.filter(matchesPlace) : [];
        setComments(filtered);
        ensureAuthorsForComments(filtered);
      }
    } catch (e) {
      console.warn('[CommentsSection] refresh error', e);
    } finally {
      setLoading(false);
    }
  };

  const getCommentId = (c) => c && (c.id || c._id || c.commentId || c.comment_id || c._idcomment || c.commentID);
  const getCommentUserId = (c) => c && (c.userId || c.user_id || c.authorId || c.author_id || c.userId);
  const getCommentText = (c) => c && (c.text || c.content || c.body || c.message || "");
  const getCommentAuthor = (c) => {
    if (!c) return null;
    const uid = getCommentUserId(c);
    if (uid && authorsMap && authorsMap[String(uid)]) {
      return (
        authorsMap[String(uid)].name ||
        authorsMap[String(uid)].displayName ||
        authorsMap[String(uid)].username ||
        authorsMap[String(uid)].fullName ||
        authorsMap[String(uid)].email ||
        null
      );
    }
    return c.author || c.name || c.profile?.name || c.user?.name || c.user?.username || c.user?.fullName || c.displayName || null;
  };
  const getCommentAvatar = (c) => {
    if (!c) return null;
    const uid = getCommentUserId(c);
    if (uid && authorsMap && authorsMap[String(uid)]) {
      return (
        authorsMap[String(uid)].avatar ||
        authorsMap[String(uid)].avatarUrl ||
        authorsMap[String(uid)].photo ||
        authorsMap[String(uid)].profilePic ||
        null
      );
    }
    return c.avatar || c.profile?.avatarUrl || c.user?.avatar || c.user?.avatarUrl || c.avatarUrl || c.photo || c.profilePic || null;
  };
  const getCommentAvatarColor = (c) => {
    if (!c) return null;
    return c.profile?.avatarColor || c.avatarColor || null;
  };
  const getInitials = (name) => {
    if (!name) return '';
    const parts = String(name).trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const canModify = (item) => {
    if (!user) return false;
    const uid = user.id || user.userId || user._id;
    const authorId = getCommentUserId(item);
    const sameUser = uid && authorId && String(uid) === String(authorId);
    const sameName = user.name && (item.author && item.author === user.name);
    const isAdmin = user.isAdmin || user.role === "admin";
    return Boolean(sameUser || sameName || isAdmin);
  };

  const handleDelete = async (item) => {
    const id = getCommentId(item);
    if (!id) {
      console.warn('[CommentsSection] cannot delete comment - id missing');
      return;
    }
    if (!token) {
      Alert.alert('Permissão', 'Você precisa estar logado para apagar comentários.');
      return;
    }
    const proceedDelete = async () => {
      try {
        setLoading(true);
        const url = `${endpoint}/${encodeURIComponent(id)}`;
        try {
          console.log('[CommentsSection] DELETE', url);
          const r = await fetch(url, { method: 'DELETE', headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}), Accept: 'application/json' }, mode: 'cors' });
          if (r && r.ok) {
            setComments((s) => s.filter((c) => String(getCommentId(c)) !== String(id)));
          } else {
            const bt = await (r ? r.text().catch(() => null) : Promise.resolve(null));
            console.warn('[CommentsSection] delete failed', url, r ? r.status : 'no-response', bt);
            Alert.alert('Erro', 'Não foi possível apagar o comentário.');
          }
        } catch (err) {
          console.error('[CommentsSection] delete fetch error', url, err);
          Alert.alert('Erro', 'Ocorreu um erro ao apagar.');
        }
      } catch (e) {
        console.error('[CommentsSection] delete error', e);
        Alert.alert('Erro', 'Ocorreu um erro ao apagar.');
      } finally {
        setLoading(false);
      }
    };

    // On web Alert.alert may not behave as on native; use window.confirm fallback
    if (Platform.OS === 'web') {
      try {
        const ok = window.confirm('Deseja realmente apagar este comentário?');
        if (ok) await proceedDelete();
      } catch (e) {
        await proceedDelete();
      }
    } else {
      Alert.alert('Confirmar', 'Deseja realmente apagar este comentário?', [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Apagar', style: 'destructive', onPress: proceedDelete },
      ]);
    }
  };

  const handleEditStart = (item) => {
    setEditingId(getCommentId(item));
    setEditingText(getCommentText(item));
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditingText("");
  };

  const handleEditConfirm = async (item) => {
    const id = getCommentId(item);
    if (!id) return;
    if (!token) {
      Alert.alert('Permissão', 'Você precisa estar logado para editar comentários.');
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`${endpoint}/${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ content: editingText }),
      });
      if (!res.ok) {
        console.warn('[CommentsSection] patch failed', res.status);
        Alert.alert('Erro', 'Não foi possível atualizar o comentário.');
        return;
      }
      const raw = await res.json();
      const updatedObj = raw && (raw.comment || raw.data || raw.result || raw || null);
      const replacement = updatedObj || { ...item, content: editingText, text: editingText };
      setComments((s) => s.map((c) => (String(getCommentId(c)) === String(id) ? replacement : c)));
      setEditingId(null);
      setEditingText("");
    } catch (e) {
      console.error('[CommentsSection] edit error', e);
      Alert.alert('Erro', 'Ocorreu um erro ao editar.');
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    const text = (newComment || "").trim();
    if (!text) return;
    // If the parent provided an onSendComment handler, call it and allow it
    // to return a created comment object to append. If it fails, we fall
    // back to a local optimistic append.
    try {
      setLoading(true);
      if (typeof onSendComment === "function") {
        const result = await onSendComment(text, { placeId, user, token });
        if (result === true || typeof result === "undefined") {
          // parent handled but didn't return a created comment -> optimistic append
          setComments((s) => [...s, { author: user?.name || "Você", text, avatar: user?.avatar, profile: { name: user?.name, avatarUrl: user?.avatar || user?.avatarUrl, avatarColor: user?.avatarColor } }]);
        } else if (result) {
          // parent returned created comment object
          setComments((s) => [...s, result]);
        }
      } else {
        // default: post directly to backend using endpoint and commentKey
        try {
          const payload = { userId: user?.id, content: text };
          if (placeId) payload[commentKey] = placeId;
          console.log('[CommentsSection] POST payload', endpoint, payload);

          // single attempt to the configured endpoint (you confirmed it's '/comment')
          // try multiple variants to work around dev host / CORS differences
          const tryUrls = [
            endpoint,
            endpoint.replace('localhost', '127.0.0.1'),
          ];
          // add relative path as last resort (lets dev server proxy handle it)
          tryUrls.push('/' + endpoint.split('/').pop());

          const fetchOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            mode: 'cors',
            body: JSON.stringify(payload),
          };

          try {
            console.log('[CommentsSection] POST', endpoint, payload);
            const res = await fetch(endpoint, fetchOptions);
            if (res && res.ok) {
              const rawCreated = await res.json().catch(() => null);
              console.log('[CommentsSection] POST response', endpoint, rawCreated);
              const createdObj = rawCreated && (rawCreated.comment || rawCreated.data || rawCreated.result || rawCreated || null);
              setComments((s) => [...s, createdObj || { author: user?.name || 'Você', content: text, text, avatar: user?.avatar }]);
            } else {
              const bodyText = await (res ? res.text().catch(() => null) : Promise.resolve(null));
              console.warn('[CommentsSection] post failed', endpoint, res ? res.status : 'no-response', bodyText);
              Alert.alert('Erro', 'Não foi possível enviar o comentário.');
              // optimistic append so UX isn't blocked
              setComments((s) => [...s, { author: user?.name || 'Você', text, avatar: user?.avatar, profile: { name: user?.name, avatarUrl: user?.avatar || user?.avatarUrl, avatarColor: user?.avatarColor } }]);
            }
          } catch (err) {
            console.error('[CommentsSection] fetch error for', endpoint, err);
            Alert.alert('Erro', 'Ocorreu um erro ao enviar o comentário.');
            setComments((s) => [...s, { author: user?.name || 'Você', text, avatar: user?.avatar, profile: { name: user?.name, avatarUrl: user?.avatar || user?.avatarUrl, avatarColor: user?.avatarColor } }]);
          }
        } catch (e) {
          console.error('[CommentsSection] default post error', e);
          Alert.alert('Erro', 'Ocorreu um erro ao enviar o comentário.');
          setComments((s) => [...s, { author: user?.name || 'Você', text, avatar: user?.avatar }]);
        }
      }
      setNewComment("");
    } catch (e) {
      console.error("[CommentsSection] send error", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Text style={localStyles.section}>Comentários</Text>

      <View style={localStyles.commentInputRow}>
        <View style={localStyles.inputBackground}>
          <View style={localStyles.inputWrapper}>
            <TextInput
              style={localStyles.input}
              placeholder="Adicione um comentário..."
              placeholderTextColor="#999"
              value={newComment}
              onChangeText={setNewComment}
              editable={!loading}
            />
          </View>
        </View>
        <TouchableOpacity
          style={localStyles.sendButton}
          onPress={handleSend}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="#fff" /> : <Ionicons name="send" size={20} color="#fff" />}
        </TouchableOpacity>
      </View>

      <FlatList
        data={comments}
        extraData={comments}
        keyExtractor={(item, i) => {
          const id = getCommentId(item);
          return id ? String(id) : String(i);
        }}
        renderItem={({ item }) => {
          const cid = getCommentId(item);
          const isEditing = editingId && cid && String(editingId) === String(cid);
          return (
            <View style={localStyles.comment}>
              <View style={localStyles.avatarBlock}>
                {getCommentAvatar(item) ? (
                  <Image source={{ uri: getCommentAvatar(item) }} style={{ width: 32, height: 32, borderRadius: 16 }} />
                ) : getCommentAvatarColor(item) ? (
                  <View style={[localStyles.initialsCircle, { backgroundColor: getCommentAvatarColor(item) }]}>
                    <Text style={localStyles.initialsText}>{getInitials(getCommentAuthor(item))}</Text>
                  </View>
                ) : (
                  <Ionicons name="person" size={16} color="#fff" />
                )}
              </View>
              <View style={localStyles.commentTextContainer}>
                <Text style={localStyles.commentAuthor}>{getCommentAuthor(item) || 'Usuário'}</Text>
                {isEditing ? (
                  <View>
                    <TextInput
                      value={editingText}
                      onChangeText={setEditingText}
                      style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 6, marginBottom: 6 }}
                      multiline
                    />
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity onPress={() => handleEditConfirm(item)} style={[localStyles.smallButton, { backgroundColor: '#1E77A5' }]}>
                        <Ionicons name="checkmark" size={16} color="#fff" />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={handleEditCancel} style={[localStyles.smallButton, { marginLeft: 8 }]}>
                        <Ionicons name="close" size={16} color="#fff" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <Text style={localStyles.commentText}>{getCommentText(item)}</Text>
                )}
              </View>

              {canModify(item) && !isEditing && (
                <View style={localStyles.actionColumn}>
                  <TouchableOpacity onPress={() => handleEditStart(item)} style={localStyles.actionButton}>
                    <Ionicons name="pencil" size={16} color="#1E4F6E" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDelete(item)} style={[localStyles.actionButton, { marginTop: 8 }]}>
                    <Ionicons name="trash" size={16} color="#b00020" />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  section: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  commentInputRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  inputBackground: { flex: 1, backgroundColor: "#D9D9D9", borderRadius: 25, padding: 10, marginRight: 8 },
  inputWrapper: { backgroundColor: "#fff", borderRadius: 20, paddingHorizontal: 15, paddingVertical: 6 },
  input: { fontSize: 14, color: "#333", backgroundColor: "transparent", paddingVertical: 5 },
  sendButton: { backgroundColor: "#1E4F6E", padding: 10, borderRadius: 8, justifyContent: "center", alignItems: "center" },
  comment: { flexDirection: "row", alignItems: "flex-start", backgroundColor: "#D9D9D9", padding: 10, borderRadius: 8, marginBottom: 8 },
  avatarBlock: { width: 32, height: 32, borderRadius: 16, marginRight: 10, backgroundColor: "#aaa", justifyContent: "center", alignItems: "center" },
  commentTextContainer: { flex: 1 },
  commentAuthor: { fontWeight: "bold", fontSize: 14, marginBottom: 2 },
  commentText: { fontSize: 14, color: "#333" },
  actionColumn: { width: 48, justifyContent: 'flex-start', alignItems: 'center', marginLeft: 8 },
  actionButton: { width: 36, height: 36, borderRadius: 8, backgroundColor: '#e6eef6', justifyContent: 'center', alignItems: 'center' },
  smallButton: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6, backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center' },
  initialsCircle: { width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  initialsText: { color: '#fff', fontWeight: 'bold' },
});
