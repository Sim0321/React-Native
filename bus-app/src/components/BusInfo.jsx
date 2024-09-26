import { Text, View } from "react-native";
import BookmarkButton from "./BookmarkButton";
import { COLOR } from "../color";
import AlarmButton from "./AlarmButton";
import NextBusInfo from "./NextBusInfo";
import Margin from "./Margin";

export default ({
  onPress,
  isBookmarked,
  num,
  directionDescription,
  numColor,
  processedNextBusInfos,
}) => {
  return (
    <View
      style={{ flexDirection: "row", height: 75, backgroundColor: COLOR.WHITE }}
    >
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        {/* 북마크 */}
        <BookmarkButton
          size={20}
          onPress={onPress}
          isBookmarked={isBookmarked}
          style={{ paddingHorizontal: 10 }}
        />

        {/* 버스방향, 방향 */}
        <View style={{ flex: 1 }}>
          <Text style={{ color: numColor, fontSize: 20 }}>{num}</Text>
          <Margin height={5} />
          <Text style={{ fontSize: 13, color: COLOR.GRAY_3 }}>
            {directionDescription} 방향
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* M분 S초 / N번째 전 / 여유 */}
        <View
          style={{
            flex: 1,
          }}
        >
          {processedNextBusInfos.map((info, i) => (
            <NextBusInfo
              key={`next-bux-info-${i}`}
              hasInfo={info.hasInfo}
              remainedTimeText={info.remainedTimeText}
              numOfRemainedStops={info.numOfRemainedStops}
              seatStatusText={info.seatStatusText}
            />
          ))}
        </View>

        {/* 알람아이콘 */}
        <AlarmButton onPress={() => {}} style={{ paddingHorizontal: 12 }} />
      </View>
      {/* <Margin height={10} /> */}
    </View>
  );
};
