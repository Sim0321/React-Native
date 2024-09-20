import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { ITEM_WIDTH } from "./util";
import AntDesign from "@expo/vector-icons/AntDesign";

export default ({
  value,
  onChangeText,
  bottomSpace,
  placeholder,
  onPressAdd,
}) => {
  console.log(bottomSpace);
  return (
    <View
      style={{
        marginBottom: bottomSpace,
        flexDirection: "row",
        alignItems: "center",
        width: ITEM_WIDTH,
      }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ padding: 5, flex: 1 }}
        placeholder={placeholder}
      />
      <TouchableOpacity
        onPress={onPressAdd}
        hitSlop={{ top: 20, bottom: 20, right: 20 }}
        style={{ padding: 5 }}
      >
        <AntDesign name="plus" size={18} color="#595959" />
      </TouchableOpacity>
    </View>
  );
};
