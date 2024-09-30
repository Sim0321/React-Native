import React from "react";
import { Button, Text, View } from "react-native";

export class ScreenC extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>이것은 ScreenC라고 합니다.</Text>

        {/* <Button
          title="뒤로가기"
          onPress={() => {
            console.log("뒤로가기");
          }}
        /> */}
      </View>
    );
  }
}
