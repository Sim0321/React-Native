import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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

  const onPressNum = (num) => {
    if (currentOperator) {
      setResult(input);
      setInput(num);
    } else {
      const newInput = Number(`${input}${num}`);
      setInput(newInput);
    }
  };

  const onPressOperator = (operator) => {
    if (operator !== "=") {
      setCurrentOperator(operator);
    } else {
      let finalResult = result;
      switch (currentOperator) {
        case "+":
          finalResult = result + input;
          break;
        case "-":
          finalResult = result - input;
          break;
        case "*":
          finalResult = result * input;
          break;
        case "/":
          finalResult = result / input;
          break;

        default:
          break;
      }
      setResult(finalResult);
      setInput(finalResult);
    }
  };

  const onPressReset = () => {
    setInput(0);
    setCurrentOperator(null);
    setResult(null);
    setTempInput(null);
    setTempOperator(null);
  };

  // Button type: 'result' | 'operator' | 'num'
  const Button = ({ text, onPress, flex, type, isSelected }) => {
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
          borderWidth: isSelected ? 1 : 0.2,
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
        <Button type="reset" text="AC" onPress={onPressReset} flex={3} />
        <Button
          type="operator"
          text="/"
          onPress={() => onPressOperator("/")}
          flex={1}
          isSelected={currentOperator === "/"}
        />
      </ButtonContainer>

      {/* 7 ~ x */}
      <ButtonContainer>
        {[7, 8, 9].map((num) => (
          <Button
            type="num"
            key={num}
            text={num}
            onPress={() => onPressNum(num)}
            flex={1}
          />
        ))}

        <Button
          type="operator"
          text="*"
          onPress={() => onPressOperator("*")}
          flex={1}
          isSelected={currentOperator === "*"}
        />
      </ButtonContainer>

      {/* 4 ~ - */}
      <ButtonContainer>
        {[4, 5, 6].map((num) => (
          <Button
            type="num"
            key={num}
            text={num}
            onPress={() => onPressNum(num)}
            flex={1}
          />
        ))}
        <Button
          type="operator"
          text="-"
          onPress={() => onPressOperator("-")}
          flex={1}
          isSelected={currentOperator === "-"}
        />
      </ButtonContainer>

      {/* 1 ~ + */}
      <ButtonContainer>
        {[1, 2, 3].map((num) => (
          <Button
            type="num"
            key={num}
            text={num}
            onPress={() => onPressNum(num)}
            flex={1}
          />
        ))}
        <Button
          type="operator"
          text="+"
          onPress={() => onPressOperator("+")}
          flex={1}
          isSelected={currentOperator === "+"}
        />
      </ButtonContainer>

      {/* 0 ~ = */}
      <ButtonContainer>
        <Button type="num" text="0" onPress={() => null} flex={3} />
        <Button
          type="operator"
          text="="
          onPress={() => onPressOperator("=")}
          flex={1}
        />
      </ButtonContainer>
    </View>
  );
};
