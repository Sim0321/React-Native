import { useEffect, useState } from "react";
import dayjs from "dayjs";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import Ionicons from "@expo/vector-icons/Ionicons";

import { getCalendarColumns, ITEM_WIDTH } from "./util";
import { useCalendar } from "./hook/use-calendar";
import { useTodoList } from "./hook/use-todo-list";
import Calendar from "./Calendar";
import Margin from "./Margin";
import AddTodoInput from "./AddTodoInput";

export default function App() {
  const now = dayjs();
  const columns = getCalendarColumns(selectedDate);

  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtract1Month,
    add1Month,
  } = useCalendar(now);

  const { todoList, addTodo, removeTodo, toggleTodo, input, setInput } =
    useTodoList(selectedDate);

  const onPressLeftArrow = subtract1Month;
  const onPressRightArrow = add1Month;
  const onPressHeaderDate = showDatePicker;
  const onPressDate = setSelectedDate;

  // useEffect(() => {
  //   console.log(
  //     "changed selectedDate",
  //     dayjs(selectedDate).format("YYYY.MM.DD")
  //   );
  // }, [selectedDate]);

  const ListHeaderComponent = () => {
    return (
      <View>
        <Calendar
          selectedDate={selectedDate}
          onPressLeftArrow={onPressLeftArrow}
          onPressRightArrow={onPressRightArrow}
          onPressHeaderDate={onPressHeaderDate}
          onPressDate={onPressDate}
          columns={columns}
        />

        <Margin height={15} />

        <View
          style={{
            width: 4,
            height: 4,
            borderRadius: 4 / 2,
            backgroundColor: "#a3a3a3",
            alignSelf: "center",
          }}
        />

        <Margin height={15} />
      </View>
    );
  };

  const renderItem = ({ item: todo }) => {
    const isDone = todo.isDone;
    const onPress = () => toggleTodo(todo.id);
    const onLongPress = () =>
      Alert.alert("삭제하시겠어요?", "", [
        {
          style: "cancel",
          text: "아니오",
        },
        {
          text: "네",
          onPress: () => removeTodo(todo.id),
        },
      ]);
    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={{
          width: ITEM_WIDTH,
          // backgroundColor: todo.id % 2 === 0 ? "pink" : "lightblue",
          flexDirection: "row",
          alignSelf: "center",
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderBottomWidth: 0.2,
          borderColor: "#a6a6a6",
        }}
      >
        <Text style={{ fontSize: 14, color: "#595959", flex: 1 }}>
          {todo.content}
        </Text>
        <Ionicons
          name="checkmark"
          size={17}
          color={isDone ? "#595959" : "#bfbfbf"}
        />
      </Pressable>
    );
  };

  const onPressAdd = () => {};

  return (
    <SafeAreaProvider>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          source={{
            uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1373-159.jpg?w=1060&t=st=1667524235~exp=1667524835~hmac=8a3d988d6c33a32017e280768e1aa4037b1ec8078c98fe21f0ea2ef361aebf2c",
          }}
        />

        <SafeAreaInsetsContext.Consumer>
          {(insets) => {
            // console.log(insets);
            return (
              <>
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                  <>
                    <FlatList
                      data={todoList}
                      renderItem={renderItem}
                      ListHeaderComponent={ListHeaderComponent}
                      contentContainerStyle={{ paddingTop: insets.top + 30 }}
                    />

                    <AddTodoInput
                      value={input}
                      onChangeText={setInput}
                      placeholder={`${dayjs(selectedDate).format(
                        "M.D"
                      )}에 추가할 투두`}
                      onPressAdd={onPressAdd}
                    />
                  </>
                </KeyboardAvoidingView>
                <Margin height={insets.bottom + 30} />
              </>
            );
          }}
        </SafeAreaInsetsContext.Consumer>

        <DateTimePickerModal
          locale="KO"
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          date={new Date(selectedDate)}
          confirmTextIOS="확인"
          cancelTextIOS="취소"
        />
      </Pressable>
    </SafeAreaProvider>
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
