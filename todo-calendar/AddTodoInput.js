import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { ITEM_WIDTH } from "./util";
import AntDesign from "@expo/vector-icons/AntDesign";

export default ({
  value,
  onChangeText,
  placeholder,
  onPressAdd,
  onSubmitEditing,
  onFocus,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        width: ITEM_WIDTH,
      }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ padding: 5, flex: 1, color: "#595959" }}
        placeholder={placeholder}
        onSubmitEditing={onSubmitEditing} // submit 한 이후에
        blurOnSubmit={false} // 키보드가 내려가는 것을 blur가 된다고 표현
        onFocus={onFocus} // input에 focus 되면 flatList의 마지막 순서로 스크롤이 가지게
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
