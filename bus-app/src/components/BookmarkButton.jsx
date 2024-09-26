import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLOR } from "../color";
import { useState } from "react";
import { useBookmark } from "../hooks/useBookmark";

export default ({ onPress, isBookmarked: isBookmarkedProp, style, size }) => {
  const { isBookmarked, toggleIsBookmarked } = useBookmark(isBookmarkedProp);

  return (
    <TouchableOpacity
      onPress={() => {
        toggleIsBookmarked();
        onPress();
      }}
    >
      <Ionicons
        style={style}
        name="star"
        size={size}
        color={isBookmarked ? COLOR.YELLOW : COLOR.GRAY_1}
      />
    </TouchableOpacity>
  );
};
