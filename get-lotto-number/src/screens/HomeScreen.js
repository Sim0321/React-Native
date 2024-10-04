import { View } from "react-native";
import { Header } from "../components/Header/Header";
import { Spacer } from "../components/Spacer";
import { Button } from "../components/Button";
import { Typography } from "../components/Typography";
import React, { useCallback, useState } from "react";
import { LottoNumberView } from "../components/LottoNumberView";
import { getRandomSixNumber } from "../utils/Utils";

export const HomeScreen = (props) => {
  const [numbers, setNumbers] = useState([]);
  const onPressGetNumber = useCallback(() => {
    const randomNumbers = getRandomSixNumber();
    setNumbers(randomNumbers);

    // 5줄 나오는 코드
    // const newNumbers = Array.from({ length: 5 }, () => getRandomSixNumber());
    // setNumbers(newNumbers);
  }, []);

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
            height: 350,
            flexDirection: "column",
            paddingHorizontal: 12,
            backgroundColor: "white",
            borderColor: "gray",
          }}
        >
          {numbers.length === 7 && <LottoNumberView numbers={numbers} />}
          {/* {numbers.length === 5 &&
            numbers.map((line, index) => (
              <LottoNumberView key={`line-${index}`} numbers={line} />
            ))} */}
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
