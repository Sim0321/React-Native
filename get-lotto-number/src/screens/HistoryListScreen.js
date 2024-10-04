import { FlatList, View } from "react-native";
import { Header } from "../components/Header/Header";
import React, { useState, useCallback } from "react";
import { Typography } from "../components/Typography";
import { LottoNumberView } from "../components/LottoNumberView";

export const HistoryListScreen = (props) => {
  const [history] = useState([
    {
      date: new Date(),
      numbers: [1, 2, 3, 4, 5, 6],
    },
    {
      date: new Date(),
      numbers: [1, 2, 3, 4, 5, 6],
    },
    {
      date: new Date(),
      numbers: [1, 2, 3, 4, 5, 6],
    },
    {
      date: new Date(),
      numbers: [1, 2, 3, 4, 5, 6],
    },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HISTORY" />
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={history}
        contentContainerStyle={{
          paddingVertical: 24,
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 12,
                marginHorizontal: 24,
                height: 120,
                backgroundColor: "white",
              }}
            >
              <Typography fontSize={16}>
                {item.date.getFullYear()}. {item.date.getMonth() + 1}.
                {item.date.getDay()}
              </Typography>

              <LottoNumberView numbers={item.numbers} />
            </View>
          );
        }}
      />
    </View>
  );
};
