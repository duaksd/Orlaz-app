import { API_URL } from "./api";

export async function updateEmail(userId, newEmail) {
  const response = await fetch(`${API_URL}/users/${userId}/email`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: newEmail }),
  });
  return response.json();
}

export async function updatePassword(userId, newPassword) {
  const response = await fetch(`${API_URL}/users/${userId}/password`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: newPassword }),
  });
  return response.json();
}

export async function deleteAccount(userId) {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
}

export async function registerUser({ name, email, password }) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return response.json();
}
