import React, { useCallback } from "react";
import { View } from "react-native";
import { Typography } from "./Typography";
import { ITEM_SIZE } from "../screens/HomeScreen";

export const LottoNumberView = (props) => {
  const getNumberBackgroundColor = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 10) % 6;
    switch (randomNumber) {
      case 0:
        return "red";
      case 1:
        return "blue";
      case 1:
        return "blue";
      case 2:
        return "gray";
      case 3:
        return "green";
      case 4:
        return "purple";

      default:
        return "black";
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {props.numbers.map((item) => {
        return (
          <View
            key={`1-${item}`}
            style={{
              backgroundColor: getNumberBackgroundColor(),
              width: ITEM_SIZE,
              height: ITEM_SIZE,
              borderRadius: ITEM_SIZE / 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography fontSize={20} color="white">
              {item}
            </Typography>
          </View>
        );
      })}
    </View>
  );
};
