import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ color: "grey" }}>친구 {props.friendProfileLen}</Text>
      {/* <MaterialIcons name="keyboard-arrow-up" size={24} color="black" /> */}
      <TouchableOpacity onPress={props.onPress}>
        <MaterialIcons
          name={props.isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="lightgrey"
        />
      </TouchableOpacity>
    </View>
  );
};
