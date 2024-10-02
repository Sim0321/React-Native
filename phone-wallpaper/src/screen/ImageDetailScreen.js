import { ActivityIndicator, useWindowDimensions, View } from "react-native";
import { Typography } from "../components/Typography";
import { Header } from "../components/Header/Header";
import { useCallback, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RemoteImage } from "../components/RemoteImage";
import { Icon } from "../components/Icons";
import { Button } from "../components/Button";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

export const ImageDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [downloading, setDownloading] = useState(false);

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressDownload = useCallback(async () => {
    setDownloading(true);
    const downloadResumable = FileSystem.createDownloadResumable(
      route.params.url,
      `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`
    );

    try {
      const { uri } = await downloadResumable.downloadAsync();
      // console.log("다운로드 완료!! ", uri);

      const permissionResult = await MediaLibrary.getPermissionsAsync(true);
      // console.log("permissionResult ::", permissionResult);

      if (permissionResult.status === "denied") {
        // 권한을 거부
        setDownloading(false);
        return;
      }

      if (permissionResult.status === "undetermined") {
        // 아직 권한을 부여하거나 거부하지 않음
        const requestResult = await MediaLibrary.requestPermissionsAsync();
        // console.log("requestResult ::", requestResult);

        if (requestResult.status === "dinied") {
          setDownloading(false);
          return;
        }
      }

      const asset = await MediaLibrary.createAssetAsync(uri);
      const album = MediaLibrary.createAlbumAsync("MyFirstAlbum", asset, false);

      // console.log(album);
    } catch (error) {}
    setDownloading(false);
  }, []);

  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName="arrow-back" onPress={onPressBack} />
          <Header.Title title="IMAGE DETAIL" />
        </Header.Group>
      </Header>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <RemoteImage
          url={route.params.url}
          width={width}
          height={width * 1.5}
        />
      </View>

      <Button onPress={onPressDownload}>
        <View style={{ paddingBottom: 24, backgroundColor: "black" }}>
          {downloading ? (
            <View
              style={{
                height: 52,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator />
            </View>
          ) : (
            <View
              style={{
                height: 52,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color="white">DOWNLOAD</Typography>
              <Icon name="download" size={24} color="white" />
            </View>
          )}
        </View>
      </Button>
    </View>
  );
};
