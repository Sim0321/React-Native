import { useWindowDimensions, View } from "react-native";
import { Typography } from "../components/Typography";
import { Header } from "../components/Header/Header";
import { useCallback } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RemoteImage } from "../components/RemoteImage";

export const ImageDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);

  const onPressBack = useCallback(() => {
    navigation.goBack();
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
    </View>
  );
};
