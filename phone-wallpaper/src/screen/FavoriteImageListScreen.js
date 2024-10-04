import { View, FlatList } from "react-native";
import { Typography } from "../components/Typography";
import { useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import { PhotoListItem } from "../components/PhotoListItem";
import { Spacer } from "../components/Spacer";

export const FavoriteImageListScreen = () => {
  const imageList = useSelector((state) => state.favorite.favorite);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header>
        <Header.Title title="FAVORITE" />
      </Header>
      <FlatList
        style={{ flex: 1 }}
        data={imageList}
        renderItem={({ item }) => {
          return (
            <View>
              <PhotoListItem url={item} />
              <Spacer space={15} />
            </View>
          );
        }}
      />
    </View>
  );
};
