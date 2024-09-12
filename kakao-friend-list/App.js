import { FlatList, StyleSheet, View } from "react-native";
import Header from "./Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Profile from "./Profile";
import { friendProfiles, myProfile } from "./data";
import Margin from "./Margin";
import Division from "./Division";
import FriendSection from "./FriendSection";
import FriendList from "./FriendList";
import { useState } from "react";
import TabBar from "./TabBar";

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  const ItemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMine={false}
      />
    </View>
  );

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "#fff" }}>
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMine={true}
      />

      <Margin height={15} />

      <Division />

      <Margin height={12} />

      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPress={onPressArrow}
        isOpened={isOpened}
      />

      <Margin height={5} />
    </View>
  );

  const ListFooterComponent = () => <Margin height={5} />;

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        // edges={["right", "top", "left"]}
      >
        <FlatList
          data={isOpened ? friendProfiles : []}
          contentContainerStyle={{ paddingHorizontal: 15 }} // 컨텐츠의 style
          keyExtractor={(_, index) => index} // key 값
          ItemSeparatorComponent={ItemSeparatorComponent} // item들 사이의 간격
          renderItem={renderItem} // item들
          stickyHeaderIndices={[0]} // 고정할 헤더의 index
          ListHeaderComponent={ListHeaderComponent} // header
          ListFooterComponent={ListFooterComponent} // footer
          showsVerticalScrollIndicator={false}
        />
        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />

        {/* <View style={{ flex: 1,  }}>
          <FriendList data={friendProfiles} isOpened={isOpened} />
        </View>

         */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
