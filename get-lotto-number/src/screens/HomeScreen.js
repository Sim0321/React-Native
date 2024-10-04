import { View } from "react-native";
import { Header } from "../components/Header/Header";
import { Spacer } from "../components/Spacer";
import { Button } from "../components/Button";
import { Typography } from "../components/Typography";
import React, { useCallback } from "react";
import { LottoNumberView } from "../components/LottoNumberView";

export const ITEM_SIZE = 40;

export const HomeScreen = (props) => {
  const onPressGetNumber = useCallback(() => {}, []);

  // const getNumberBackgroundColor = useCallback(() => {
  //   const randomNumber = Math.floor(Math.random() * 10) % 6;
  //   switch (randomNumber) {
  //     case 0:
  //       return "red";
  //     case 1:
  //       return "blue";
  //     case 1:
  //       return "blue";
  //     case 2:
  //       return "gray";
  //     case 3:
  //       return "green";
  //     case 4:
  //       return "purple";
  //     case 1:
  //       return "blue";
  //     case 1:
  //       return "blue";
  //     case 1:
  //       return "blue";
  //     case 1:
  //       return "blue";
  //     default:
  //       return "black";
  //   }
  // }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HOME" />
      </Header>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
      >
        <View
          style={{
            height: 250,
            flexDirection: "column",
            paddingHorizontal: 24,
            backgroundColor: "white",
            borderColor: "gray",
          }}
        >
          <LottoNumberView numbers={[1, 2, 3, 4, 5, 6]} />
        </View>
        <Spacer space={20} />

        <Button onPress={onPressGetNumber}>
          <View
            style={{
              backgroundColor: "black",
              paddingVertical: 24,
              alignItems: "center",
            }}
          >
            <Typography color="white" fontSize={18}>
              로또 번호 추출하기
            </Typography>
          </View>
        </Button>
      </View>
    </View>
  );
};
