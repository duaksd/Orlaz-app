import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRating } from "../contexts/RatingContext";

export default function YourScreen() {
  const { ratings, updateRating } = useRating();
  const screenName = "YourScreen";
  const [rating, setRating] = useState(ratings[screenName] || 0);

  useEffect(() => {
    setRating(ratings[screenName] || 0);
  }, [ratings, screenName]);

  const handleRating = (newRating) => {
    setRating(newRating);
    updateRating(screenName, newRating);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleRating(rating > 0 ? 0 : 5)}>
        <Ionicons
          name={rating > 0 ? "star" : "star-outline"}
          size={16}
          color={rating > 0 ? "#fff" : "#FFD700"}
        />
        <Text style={rating > 0 ? styles.ratedText : styles.unratedText}>
          {rating > 0 ? `Avaliado (${rating}/5)` : "Avaliar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  ratedText: { color: "#fff" },
  unratedText: { color: "#FFD700" },
};
