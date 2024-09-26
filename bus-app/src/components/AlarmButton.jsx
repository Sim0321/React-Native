import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLOR } from "../color";
import { useTheme } from "../hooks/useTheme";

export default ({ onPress, style, NEWCOLOR }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        style={style}
        name="alarm-outline"
        size={24}
        color={NEWCOLOR.GRAY_3_GRAY_2}
      />
    </TouchableOpacity>
  );
};
