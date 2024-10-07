import { Header } from "../components/Header/Header";
import { View } from "react-native";
import { Spacer } from "../components/Spacer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback } from "react";
import WebView from "react-native-webview";

export const LinkDetailScreen = () => {
  const route = useRoute();
  // console.log(route.params.item);
  const navigation = useNavigation();

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName="arrow-back" onPress={onPressBack} />
          <Spacer horizontal space={12} />
          <Header.Title title="LINK DETAIL" />
        </Header.Group>
      </Header>

      <WebView style={{ flex: 1 }} source={{ uri: route.params.item.link }} />
    </View>
  );
};
