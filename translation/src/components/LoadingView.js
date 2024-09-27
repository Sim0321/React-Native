import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { View } from "react-native";

export default () => {
  {
    /* autoPlay가 false일 떄 */
  }
  // const ref = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     ref.current?.play();
  //   }, 2000);
  // });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        autoPlay
        // ref={ref}
        style={{
          width: 150,
          height: 150,
        }}
        source={require("../../assets/loading.json")}
      />
    </View>
  );
};
