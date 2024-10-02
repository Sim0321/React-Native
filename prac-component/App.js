import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Typography } from "./src/components/Typography";
import { LocalImage } from "./src/components/LocalImage";
import { RemoteImage } from "./src/components/RemoteImage";
import { Icon } from "./src/components/Icons";
import { Badge } from "./src/components/Badge";
import { Button } from "./src/components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      {/* 텍스트 */}
      <Typography color="red" fontSize={20}>
        <Typography color="green" fontSize={32}>
          이것은
        </Typography>
        텍스트 입니다.
      </Typography>

      {/* 로컬 이미지 */}
      <LocalImage
        localAsset={require("./assets/favicon.png")}
        width={50}
        height={50}
      />

      {/* 원격 이미지 */}
      <RemoteImage
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZsi0wYMh4KXe6cOm0uvljMH_HsTCrCRb4w&s"
        width={200}
        height={200}
      />

      <Icon name="home" size={40} color="red" />

      <Badge fontSize={10}>
        <Typography>Badge</Typography>
      </Badge>

      <View>
        <Badge fontSize={10}>
          <Typography>Badge</Typography>
        </Badge>
        <Badge fontSize={5}>
          <Icon name="home" size={50} color="black" />
        </Badge>
      </View>

      <Button
        onPress={() => {
          console.log("눌림");
        }}
      >
        <Typography>TEXT BUTTON</Typography>
      </Button>

      <Button
        onPress={() => {
          console.log("아이콘눌림");
        }}
      >
        <Icon name="home" size={50} color="green" />
      </Button>
    </View>
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
