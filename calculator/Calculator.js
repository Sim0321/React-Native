import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export default () => {
  const [input, setInput] = useState(0);
  const [currentOperator, setCurrentOperator] = useState(null); // +,-,*,/
  const [result, setResult] = useState(null);

  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null);

  const COLORMAP = {
    RESULT: "#4E4C51",
    RESET: "#5F5E62",
    OPERATOR: "#F39C29",
    NUM: "#5C5674",
  };

  // Button type: 'result' | 'operator' | 'num'
  const Button = ({ text, onPress, flex, type }) => {
    const backgroundColor =
      type === "reset"
        ? COLORMAP.RESET
        : type === "operator"
        ? COLORMAP.OPERATOR
        : type === "num"
        ? COLORMAP.NUM
        : "transparent";
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex,
          backgroundColor,
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          borderWidth: 0.2,
          borderColor: "blcak",
        }}
      >
        <Text style={{ color: "white", fontSize: 25 }}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const ButtonContainer = styled.View`
    width: 100%;
    flex-direction: row;
  `;

  return (
    <View
      style={{
        flex: 1,
        width: 250,
        justifyContent: "center",
      }}
    >
      <Text>input:{input}</Text>
      <Text>currentOperator:{currentOperator}</Text>
      <Text>result:{result}</Text>
      <Text>tempInput:{tempInput}</Text>
      <Text>tempOperator:{tempOperator}</Text>
      {/* 결과 */}
      <View
        style={{
          backgroundColor: COLORMAP.RESULT,
          height: 50,
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          minimumFontScale={0.5}
          style={{
            fontSize: 35,
            color: "white",
            paddingLeft: 20,
            paddingRight: 8,
          }}
        >
          {input}
        </Text>
      </View>

      {/* AC ~ / */}
      <ButtonContainer>
        <Button type="reset" text="AC" onPress={() => null} flex={3} />
        <Button type="operator" text="/" onPress={() => null} flex={1} />
      </ButtonContainer>

      {/* 7 ~ x */}
      <ButtonContainer>
        <Button type="num" text="7" onPress={() => null} flex={1} />
        <Button type="num" text="8" onPress={() => null} flex={1} />
        <Button type="num" text="9" onPress={() => null} flex={1} />
        <Button type="operator" text="X" onPress={() => null} flex={1} />
      </ButtonContainer>

      {/* 4 ~ - */}
      <ButtonContainer>
        <Button type="num" text="4" onPress={() => null} flex={1} />
        <Button type="num" text="5" onPress={() => null} flex={1} />
        <Button type="num" text="6" onPress={() => null} flex={1} />
        <Button type="operator" text="-" onPress={() => null} flex={1} />
      </ButtonContainer>

      {/* 1 ~ + */}
      <ButtonContainer>
        <Button type="num" text="1" onPress={() => null} flex={1} />
        <Button type="num" text="2" onPress={() => null} flex={1} />
        <Button type="num" text="3" onPress={() => null} flex={1} />
        <Button type="operator" text="+" onPress={() => null} flex={1} />
      </ButtonContainer>

      {/* 0 ~ = */}
      <ButtonContainer>
        <Button type="num" text="0" onPress={() => null} flex={3} />
        <Button type="operator" text="=" onPress={() => null} flex={1} />
      </ButtonContainer>
    </View>
  );
};
