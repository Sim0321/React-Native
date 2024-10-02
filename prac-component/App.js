import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Typography } from "./src/components/Typography";
import { LocalImage } from "./src/components/LocalImage";
import { RemoteImage } from "./src/components/RemoteImage";
import { Icon } from "./src/components/Icons";
import { Badge } from "./src/components/Badge";
import { Button } from "./src/components/Button";
import { Divider } from "./src/components/Divider";
import { Spacer } from "./src/components/Spacer";
import { TabIcon } from "./src/components/TabIcon";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { HeaderWithoutCompound } from "./src/components/HeaderWithoutCompound";
import { Header } from "./src/components/Header/Header";
import { HookTestComponent } from "./src/components/HookTestComponent";
import { useCallback, useState } from "react";

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const doSum = useCallback(() => {
    return a + b;
  }, [a, b]);
  return (
    // <View style={styles.container}>
    //   {/* 텍스트 */}
    //   <Typography color="red" fontSize={20}>
    //     <Typography color="green" fontSize={32}>
    //       이것은
    //     </Typography>
    //     텍스트 입니다.
    //   </Typography>

    //   <Spacer space={20} />
    //   <Divider />
    //   <Spacer space={20} />

    //   {/* 로컬 이미지 */}
    //   <LocalImage
    //     localAsset={require("./assets/favicon.png")}
    //     width={50}
    //     height={50}
    //   />

    //   <Spacer space={20} />
    //   <Divider />

    //   {/* 원격 이미지 */}
    //   <RemoteImage
    //     url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZsi0wYMh4KXe6cOm0uvljMH_HsTCrCRb4w&s"
    //     width={200}
    //     height={200}
    //   />

    //   <Icon name="home" size={40} color="red" />

    //   <Badge fontSize={10}>
    //     <Typography>Badge</Typography>
    //   </Badge>

    //   <View>
    //     <Badge fontSize={10}>
    //       <Typography>Badge</Typography>
    //     </Badge>
    //     <Badge fontSize={5}>
    //       <Icon name="home" size={50} color="black" />
    //     </Badge>
    //   </View>

    //   <View style={{ flexDirection: "row" }}>
    //     <Button
    //       onPress={() => {
    //         console.log("눌림");
    //       }}
    //     >
    //       <Typography>TEXT BUTTON</Typography>
    //     </Button>

    //     <Spacer horizontal space={50} />

    //     <Button
    //       onPress={() => {
    //         console.log("아이콘눌림");
    //       }}
    //     >
    //       <Icon name="home" size={50} color="green" />
    //     </Button>
    //   </View>

    //   <TabIcon iconName="home"></TabIcon>
    //   <TabIcon iconName="home" visibleBadge></TabIcon>
    // </View>

    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        {/* <HeaderWithoutCompound title="HEADER" /> */}
        <Header>
          <Header.Group>
            <Header.Icon
              iconName="arrow-back"
              onPress={() => console.log("뒤로가기")}
            />
            <Header.Title title="HEADER" />
          </Header.Group>

          <Header.Icon iconName="close" onPress={() => console.log("닫기")} />
        </Header>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <HookTestComponent a={a} b={b} />
          <Typography>현재 callback으로 계산 된 값 : {doSum()}</Typography>
          <Button
            onPress={() => {
              console.log("press");
              setA(a + 1);
            }}
          >
            <Typography>A더하기</Typography>
          </Button>
        </View>
      </View>
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
