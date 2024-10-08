import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BusInfo from "./src/components/BusInfo";
import { COLOR } from "./src/color";
import {
  getBusNumColorByType,
  getRemainedTimeText,
  getSeatStatusText,
  getSections,
} from "./src/utils";
import { busStop } from "./src/data";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Margin from "./src/components/Margin";
import BookmarkButton from "./src/components/BookmarkButton";
import { useTheme } from "./src/hooks/useTheme";

const busStopBookmarkSize = 22;
const busStopBookmarkPaddingHorizontal = 6;

export default function App() {
  const sections = getSections(busStop.buses);
  const [now, setNow] = useState(dayjs());

  const [refreshing, setRefreshing] = useState(false);

  const { NEWCOLOR, isDark, toggleIsDark } = useTheme();

  const IconButton = ({ iconName }) => {
    return (
      <TouchableOpacity style={{ padding: 10 }}>
        <SimpleLineIcons
          name={iconName}
          size={20}
          color={NEWCOLOR.WHITE_BLACK}
        />
      </TouchableOpacity>
    );
  };

  const onPressBusStopBookmark = () => {
    // TODO
  };

  const ListHeaderComponent = () => {
    return (
      <View
        style={{
          backgroundColor: NEWCOLOR.GRAY_3_GRAY_2,
          height: 170,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Margin height={10} />
        {/* 정류소 번호, 이름, 방향 */}

        <Text style={{ color: NEWCOLOR.WHITE_BLACK, fontSize: 13 }}>
          {busStop.id}
        </Text>
        <Margin height={4} />

        <Text style={{ color: NEWCOLOR.WHITE_BLACK, fontSize: 20 }}>
          {busStop.name}
        </Text>
        <Margin height={4} />

        <Text style={{ color: NEWCOLOR.GRAY_1_GRAY_4, fontSize: 14 }}>
          {busStop.directionDescription}
        </Text>
        <Margin height={20} />

        {/* 북마크 */}
        <BookmarkButton
          size={busStopBookmarkSize}
          onPress={onPressBusStopBookmark}
          isBookmarked={busStop.isBookmarked}
          style={{
            borderWidth: 0.3,
            borderColor: NEWCOLOR.GRAY_1_GRAY_4,
            borderRadius:
              (busStopBookmarkSize + busStopBookmarkPaddingHorizontal * 2) / 2,
            padding: busStopBookmarkPaddingHorizontal,
          }}
        />
        <Margin height={10} />

        <Switch
          value={isDark}
          onValueChange={(v) => {
            toggleIsDark();
          }}
        />
        <Margin height={25} />
      </View>
    );
  };

  const renderSectionHeader = ({ section: { title } }) => {
    return (
      <View
        style={{
          paddingLeft: 13,
          paddingVertical: 3,
          backgroundColor: NEWCOLOR.GRAY_1_GRAY_4,
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
          borderTopColor: NEWCOLOR.GRAY_2_GRAY_3,
          borderBottomColor: NEWCOLOR.GRAY_2_GRAY_3,
        }}
      >
        <Text style={{ color: NEWCOLOR.GRAY_4_GRAY_1, fontSize: 12 }}>
          {title}
        </Text>
      </View>
    );
  };

  const renderItem = ({ item: bus }) => {
    const numColor = getBusNumColorByType(bus.type);

    // undefined 값 null로 통일하기 위해
    const firstNextBusInfo = bus.nextBusInfos?.[0] ?? null; // undefined ?? null -> null
    const secondNextBusInfo = bus.nextBusInfos?.[1] ?? null; // { ... } ?? null -> { ... }
    const newNextBusInfos =
      !firstNextBusInfo && !secondNextBusInfo
        ? [null]
        : [firstNextBusInfo, secondNextBusInfo];

    // if (bus.num === 2000) {
    //   console.log(bus.num, 'newNextBusInfos', newNextBusInfos);
    // }

    const processedNextBusInfos = newNextBusInfos.map((info) => {
      if (!info)
        return {
          hasInfo: false,
          remainedTimeText: "도착 정보 없음",
        };
      const { arrivalTime, numOfRemainedStops, numOfPassengers } = info;
      const remainedTimeText = getRemainedTimeText(now, arrivalTime);
      const seatStatusText = getSeatStatusText(bus.type, numOfPassengers);
      return {
        hasInfo: true,
        remainedTimeText,
        numOfRemainedStops,
        seatStatusText,
      };
    });

    return (
      <BusInfo
        NEWCOLOR={NEWCOLOR}
        onPress={() => {}}
        isBookmarked={bus.isBookmarked}
        num={bus.num}
        directionDescription={bus.directionDescription}
        numColor={numColor}
        processedNextBusInfos={processedNextBusInfos}
      />
    );
  };

  const ItemSeparatorComponent = () => (
    <View
      style={{
        width: "100%",
        height: 1,
        backgroundColor: NEWCOLOR.GRAY_1_GRAY_4,
      }}
    />
  );

  const ListFooterComponent = () => <Margin height={30} />;

  const onRefresh = () => {
    // console.log("on Refresh");
    setRefreshing(true);
  };

  useEffect(() => {
    if (refreshing) {
      setTimeout(() => {
        // API refetch 완료되었을 때
        setRefreshing(false);
        setNow(dayjs());
      }, 2000);
    }
  }, [refreshing]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNow = dayjs();
      setNow(newNow);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: NEWCOLOR.WHITE_BLACK,
      }}
    >
      {/* 뒤로가기와 홈 아이콘 */}
      <View style={{ backgroundColor: NEWCOLOR.GRAY_3_GRAY_2, width: "100%" }}>
        <SafeAreaView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <IconButton iconName="arrow-left" />
          <IconButton iconName="home" />
        </SafeAreaView>

        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 500,
            backgroundColor: NEWCOLOR.GRAY_3_GRAY_2,
            zIndex: -1,
          }}
        />
      </View>

      <SectionList
        style={{ width: "100%", flex: 1 }}
        sections={sections}
        ListHeaderComponent={ListHeaderComponent}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={ListFooterComponent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing} // 지금 스크롤이 되고 있는지
            onRefresh={onRefresh} // 스크롤의 Y축이 0에 다다르면 실행되는 함수
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
