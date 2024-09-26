import { Text, View } from "react-native";
import { COLOR } from "../color";
import Margin from "./Margin";

export default ({
  hasInfo, // 도착 정보 없음 일때
  remainedTimeText, //8분 0초, 곧 도착, 도착 정보 없음
  numOfRemainedStops,
  seatStatusText, // 1석, 여유, 보통
}) => {
  if (!hasInfo)
    return <Text style={{ color: COLOR.GRAY_2 }}>도착 정보 없음</Text>;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 5,
      }}
    >
      <Text style={{ color: COLOR.BLACK, marginRight: 10 }}>
        {remainedTimeText}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 0.5,
          borderColor: COLOR.GRAY_1,
          borderRadius: 3,
          padding: 2,
        }}
      >
        <Text style={{ color: COLOR.GRAY_3, marginRight: 3 }}>
          {numOfRemainedStops}번째전
        </Text>
        <Margin height={4} />
        <Text style={{ color: COLOR.CORAL }}>{seatStatusText}</Text>
      </View>
    </View>
  );
};
