import { Text, View } from "react-native";
import BookmarkButton from "./BookmarkButton";
import { COLOR } from "../color";
import AlarmButton from "./AlarmButton";
import NextBusInfo from "./NextBusInfo";

export default ({
  onPress,
  isBookmarked,
  num,
  directionDescription,
  numColor,
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        {/* 북마크 */}
        <BookmarkButton
          onPress={onPress}
          isBookmarked={isBookmarked}
          style={{ paddingHorizontal: 10 }}
        />

        {/* 버스방향, 방향 */}
        <View style={{ flex: 1 }}>
          <Text style={{ color: numColor, fontSize: 20 }}>{num}</Text>
          <Text style={{ fontSize: 13, color: COLOR.GRAY_3 }}>
            {directionDescription} 방향
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        {/* M분 S초 / N번째 전 / 여유 */}
        <View style={{ flex: 1 }}>
          <NextBusInfo
            hasInfo={true}
            remainedTimeText={"8분 0초"}
            numOfRemainedStops={5}
            seatStatusText={"여유"}
          />

          <NextBusInfo hasInfo={false} remainedTimeText={"도착 정보 없음"} />
        </View>

        {/* 알람아이콘 */}
        <AlarmButton onPress={() => {}} style={{ paddingHorizontal: 15 }} />
      </View>
    </View>
  );
};
