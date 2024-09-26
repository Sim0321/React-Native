import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLOR } from "../color";

export default ({ onPress, isBookmarked, style, size }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        style={style}
        name="star"
        size={size}
        color={isBookmarked ? COLOR.YELLOW : COLOR.GRAY_1}
      />
    </TouchableOpacity>
  );
};
