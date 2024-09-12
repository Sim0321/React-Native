import { StyleSheet, View } from "react-native";
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

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        // edges={["right", "top", "left"]}
      >
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <Header />

          <Margin height={10} />

          <Profile
            uri={myProfile.uri}
            name={myProfile.name}
            introduction={myProfile.introduction}
          />

          <Margin height={15} />

          <Division />

          <Margin height={12} />

          <FriendSection
            friendProfileLen={friendProfiles.length}
            onPress={onPressArrow}
            isOpened={isOpened}
          />

          <FriendList data={friendProfiles} isOpened={isOpened} />
        </View>

        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
