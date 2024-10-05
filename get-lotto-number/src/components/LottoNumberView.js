import React, { useCallback, useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { Typography } from "./Typography";
import { ITEM_SIZE } from "../constants";

export const LottoNumberView = (props) => {
  // const animatedValues = useRef([]).current;
  // if (animatedValues.length !== props.numbers.length) {
  //   animatedValues.splice(
  //     0,
  //     animatedValues.length,
  //     ...props.numbers.map(() => new Animated.Value(0))
  //   );
  // }

  const getNumberBackgroundColor = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 10) % 6;
    switch (randomNumber) {
      case 0:
        return "red";
      case 1:
        return "blue";
      case 2:
        return "blue";
      case 3:
        return "gray";
      case 4:
        return "green";
      case 5:
        return "purple";

      default:
        return "black";
    }
  }, []);

  // useEffect(() => {
  //   if (animatedValues.length !== props.numbers.length) {
  //     animatedValues.splice(
  //       0,
  //       animatedValues.length,
  //       ...props.numbers.map(() => new Animated.Value(0))
  //     );
  //   } else {
  //     // 기존 animatedValues 값을 0으로 리셋
  //     animatedValues.forEach((anim) => anim.setValue(0));
  //   }

  //   // 앞의 5개의 숫자에 대한 애니메이션
  //   Animated.stagger(
  //     100,
  //     animatedValues.slice(0, 6).map((anim) =>
  //       Animated.timing(anim, {
  //         toValue: 1,
  //         duration: 500,
  //         useNativeDriver: true,
  //       })
  //     )
  //   ).start(() => {
  //     // 6번째 숫자(보너스)에 지연 후 애니메이션
  //     Animated.timing(animatedValues[6], {
  //       toValue: 1,
  //       duration: 500,
  //       delay: 400,
  //       useNativeDriver: true,
  //     }).start();
  //   });
  // }, [props.numbers]);

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "space-between",
    //   }}
    // >
    //   {props.numbers.slice(0, 6).map((item, index) => {
    //     return (
    //       <Animated.View
    //         key={`1-${item}`}
    //         style={{
    //           opacity: animatedValues[index],
    //           backgroundColor: getNumberBackgroundColor(),
    //           width: ITEM_SIZE,
    //           height: ITEM_SIZE,
    //           borderRadius: ITEM_SIZE / 2,
    //           alignItems: "center",
    //           justifyContent: "center",
    //           transform: [
    //             {
    //               scale: animatedValues[index].interpolate({
    //                 inputRange: [0, 1],
    //                 outputRange: [0.5, 1],
    //               }),
    //             },
    //           ],
    //         }}
    //       >
    //         <Typography fontSize={20} color="white">
    //           {item}
    //         </Typography>
    //       </Animated.View>
    //     );
    //   })}

    //   <Typography fontSize={20} color="gray">
    //     +
    //   </Typography>

    //   <Animated.View
    //     style={{
    //       opacity: animatedValues[6],
    //       backgroundColor: "skyblue",
    //       width: ITEM_SIZE,
    //       height: ITEM_SIZE,
    //       borderRadius: ITEM_SIZE / 2,
    //       alignItems: "center",
    //       justifyContent: "center",
    //       transform: [
    //         {
    //           scale: animatedValues[6].interpolate({
    //             inputRange: [0, 1],
    //             outputRange: [0.5, 1],
    //           }),
    //         },
    //       ],
    //     }}
    //   >
    //     <Typography fontSize={20} color="white">
    //       {props.numbers[6]}
    //     </Typography>
    //   </Animated.View>
    // </View>

    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {props.numbers.slice(0, 6).map((item, index) => {
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

      <Typography fontSize={20} color="gray">
        +
      </Typography>

      <View
        style={{
          backgroundColor: "skyblue",
          width: ITEM_SIZE,
          height: ITEM_SIZE,
          borderRadius: ITEM_SIZE / 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontSize={20} color="white">
          {props.numbers[6]}
        </Typography>
      </View>
    </View>
  );
};
