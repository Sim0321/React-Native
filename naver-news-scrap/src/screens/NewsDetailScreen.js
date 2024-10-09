import React, { useCallback } from "react";
import { View } from "react-native";
import { Header } from "../components/Header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Spacer } from "../components/Spacer";
import { WebView } from "react-native-webview";

export const NewsDetailScreen = () => {
  const navigate = useNavigation();
  const routes = useRoute();
  const onPressBack = useCallback(() => {
    navigate.goBack();
  }, []);
  console.log(routes.params);
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName="arrow-back" onPress={onPressBack} />
          <Spacer space={12} />
          <View style={{ maxWidth: 200 }}>
            <Header.Title title="NEWS_DETAIL" />
          </View>
        </Header.Group>
      </Header>

      <WebView
        style={{ flex: 1 }}
        source={{ uri: routes.params.newsItem.link }}
      />
    </View>
  );
};
