import { useNavigation } from "@react-navigation/native";
import { Header } from "../components/Header/Header";
import { useWindowDimensions, View } from "react-native";
import { useCallback, useState, useEffect } from "react";
import { SingleLineInput } from "../components/SingleLineInput";
import { Button } from "../components/Button";
import { Typography } from "../components/Typography";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Spacer } from "../components/Spacer";
import { useSetRecoilState } from "recoil";
import { atomLinkList } from "../atoms/atomLinkList";
import { getOpenGraphData } from "../utils/OpenGraphTagUtils";
import { RemoteImage } from "./../components/RemoteImage";
import { getClipboardString } from "../utils/ClipboardUtils";

export const AddLinkScreen = () => {
  const navigation = useNavigation();
  const safeAreaInset = useSafeAreaInsets();
  const updateList = useSetRecoilState(atomLinkList);
  const [url, setUrl] = useState("");

  const [metaData, setMetaData] = useState(null);

  // console.log(metaData);

  const { width } = useWindowDimensions();

  const onPressClose = useCallback(() => {
    navigation.goBack();
  }, []);

  // console.log(url);

  const onPressSave = useCallback(() => {
    if (url === "") {
      return;
    }

    updateList((prevState) => {
      const list = [
        {
          title: metaData.title,
          image: metaData.image,
          link: url,
          createdAt: new Date().toISOString(),
        },
      ];

      return {
        list: list.concat(prevState.list),
      };
    });

    setUrl("");
  }, [url, metaData]);

  const onSubmitEditing = useCallback(async () => {
    const result = await getOpenGraphData(url);
    // console.log("submit ::", url, result);
    setMetaData(result);
  }, [url]);

  const onGetClipboardString = useCallback(async () => {
    const result = await getClipboardString();
    console.log("clipbord Result ::", result);
    if (result.startsWith("http://") || result.startsWith("https://")) {
      console.log("여기 들어와져요");
      setUrl(result);
      const ogResult = await getOpenGraphData(result);
      console.log("ogResult ::", ogResult);
      setMetaData({
        title: ogResult.title,
        image: ogResult.image,
        description: ogResult.description,
      });
    }
  }, []);

  useEffect(() => {
    // https://fastcampus.co.kr
    // console.log("여기 되니?");
    onGetClipboardString();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="ADD LINK" />
        </Header.Group>

        <Header.Icon iconName="close" onPress={onPressClose} />
      </Header>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: 24,
          paddingTop: 32,
        }}
      >
        <SingleLineInput
          value={url}
          onChangeText={setUrl}
          placeholder="https://example.com"
          onSubmitEditing={onSubmitEditing}
        />

        {metaData !== null && (
          <>
            <Spacer space={20} />
            <View
              style={{
                borderWidth: 1,
                borderRadius: 4,
                borderColor: "gray",
              }}
            >
              <RemoteImage
                url={metaData.image}
                width={width - 48}
                height={(width - 48) / 2}
              />
              <View
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                }}
              >
                <Spacer space={10} />
                <Typography fontSize={20} color="black">
                  {metaData.title}
                </Typography>

                <Spacer space={4} />
                <Typography fontSize={16} color="gray">
                  {metaData.description}
                </Typography>
              </View>
            </View>
          </>
        )}
      </View>

      <Button onPress={onPressSave}>
        <View style={{ backgroundColor: url === "" ? "gray" : "black" }}>
          <View
            style={{
              height: 52,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="white" fontSize={18}>
              저장하기
            </Typography>
          </View>
          <Spacer space={safeAreaInset.bottom} />
        </View>
      </Button>
    </View>
  );
};
