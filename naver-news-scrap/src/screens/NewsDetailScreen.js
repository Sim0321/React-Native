import React, { useCallback } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Spacer } from "../components/Spacer";
import { WebView } from "react-native-webview";
import { clipNewsItem } from "../actions/news";

export const NewsDetailScreen = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const routes = useRoute();

  const onPressBack = useCallback(() => {
    navigate.goBack();
  }, []);

  const onPressFavorite = useCallback(() => {
    dispatch(clipNewsItem(routes.params.newsItem));
  }, []);

  const isClipped =
    useSelector((state) =>
      state.news.favoriteNews.filter(
        (item) => item.link === routes.params.newsItem.link
      )
    ).length > 0;

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

        <Header.Icon
          iconName={isClipped ? "heart" : "heart-outline"}
          onPress={onPressFavorite}
        />
      </Header>

      <WebView
        style={{ flex: 1 }}
        source={{ uri: routes.params.newsItem.link }}
      />
    </View>
  );
};
