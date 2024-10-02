import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Typography } from "./src/components/Typography";
import { LocalImage } from "./src/components/LocalImage";
import { RemoteImage } from "./src/components/RemoteImage";

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
