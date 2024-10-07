import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { useState } from "react";

export const SingleLineInput = (props) => {
  const [focused, setFocused] = useState(false);
  return (
    <Pressable
      style={{
        flex: 1,
        alignItem: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
      }}
      onPress={Keyboard.dismiss}
    >
      <View
        style={{
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: focused ? "black" : "gray",
        }}
      >
        <TextInput
          autoCorrect={false}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          blurOnSubmit={false}
          style={[props.style, { fontSize: props.fontSize ?? 20 }]}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </View>
    </Pressable>
  );
};
