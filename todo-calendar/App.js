import dayjs from "dayjs";

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getCalendarColumns, getDayColor, getDayText } from "./util";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const columnSize = 35;

const now = dayjs();
const columns = getCalendarColumns(now);

export default function App() {
  const Column = ({ text, color, opacity }) => {
    return (
      <View
        style={{
          width: columnSize,
          height: columnSize,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color, opacity }}>{text}</Text>
      </View>
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
    const currentDateText = dayjs(now).format("YYYY.MM.DD");
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
          <ArrowButton name="arrow-left" onPress={() => {}} />

          <Text style={{ fontSize: 20, color: "#404040" }}>
            {currentDateText}
          </Text>

          <ArrowButton name="arrow-right" onPress={() => {}} />
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
    const isCurrentMonth = dayjs(date).isSame(now, "month");
    return (
      <Column
        text={dateText}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.4}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => `column-${index}`}
        data={columns}
        renderItem={renderItem}
        numColumns={7}
        ListHeaderComponent={ListHeaderComponent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
