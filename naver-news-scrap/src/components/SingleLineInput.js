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
        // flex: 1,
        width: "100%",
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
          autoCapitalize="none"
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          style={[props.style, { fontSize: props.fontSize ?? 20 }]}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          onSubmitEditing={props.onSubmitEditing}
        />
      </View>
    </Pressable>
  );
};
