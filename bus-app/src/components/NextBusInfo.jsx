import { Text, View } from "react-native";
import { COLOR } from "../color";
import Margin from "./Margin";
import { useTheme } from "../hooks/useTheme";

export default ({
  hasInfo, // 도착 정보 없음 일때
  remainedTimeText, //8분 0초, 곧 도착, 도착 정보 없음
  numOfRemainedStops,
  seatStatusText, // 1석, 여유, 보통
}) => {
  const { NEWCOLOR } = useTheme();
  if (!hasInfo)
    return (
      <Text style={{ color: NEWCOLOR.GRAY_2_GRAY_3 }}>도착 정보 없음</Text>
    );
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 5,
      }}
    >
      <Text style={{ color: NEWCOLOR.BLACK_WHITE, marginRight: 10 }}>
        {remainedTimeText}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 0.5,
          borderColor: NEWCOLOR.GRAY_1_GRAY_4,
          borderRadius: 3,
          padding: 2,
        }}
      >
        <Text style={{ color: NEWCOLOR.GRAY_3_GRAY_2, marginRight: 3 }}>
          {numOfRemainedStops}번째전
        </Text>
        <Margin height={4} />
        <Text style={{ color: COLOR.CORAL }}>{seatStatusText}</Text>
      </View>
    </View>
  );
};
