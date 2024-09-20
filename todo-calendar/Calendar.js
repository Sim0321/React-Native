import dayjs from "dayjs";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import { COLUMN_SIZE, getDayColor, getDayText } from "./util";

// const columnSize = 35;

export default ({
  selectedDate,
  onPressLeftArrow,
  onPressRightArrow,
  onPressHeaderDate,
  onPressDate,
  columns,
}) => {
  const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD");

  const Column = ({ text, color, opacity, disabled, onPress, isSelected }) => {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={{
          width: COLUMN_SIZE,
          height: COLUMN_SIZE,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isSelected ? "#c2c2c2" : "transparent",
          borderRadius: COLUMN_SIZE / 2,
        }}
      >
        <Text style={{ color, opacity }}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const ArrowButton = ({ name, onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ paddingHorizontal: 20, paddingVertical: 15 }}
      >
        <SimpleLineIcons name={name} size={15} color="#404040" />
      </TouchableOpacity>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <View>
        {/* <YYYY.MM.DD */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowButton name="arrow-left" onPress={onPressLeftArrow} />

          <TouchableOpacity onPress={onPressHeaderDate}>
            <Text style={{ fontSize: 20, color: "#404040" }}>
              {currentDateText}
            </Text>
          </TouchableOpacity>

          <ArrowButton name="arrow-right" onPress={onPressRightArrow} />
        </View>

        <View style={{ flexDirection: "row" }}>
          {/* 일 ~ 토 */}
          {[0, 1, 2, 3, 4, 5, 6].map((day) => {
            const dayText = getDayText(day);
            const color = getDayColor(day);
            return (
              <Column
                key={`day-${day}`}
                text={dayText}
                color={color}
                opacity={1}
                disabled={true}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");

    const onPress = () => onPressDate(date);

    const isSelected = dayjs(date).isSame(selectedDate, "date");
    return (
      <Column
        text={dateText}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.4}
        onPress={onPress}
        isSelected={isSelected}
      />
    );
  };

  return (
    <FlatList
      data={columns}
      renderItem={renderItem}
      scrollEnabled={false}
      keyExtractor={(_, index) => `column-${index}`}
      numColumns={7}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};
