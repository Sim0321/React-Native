import { FlatList, View } from "react-native";
import { Typography } from "../components/Typography";
import { Header } from "../components/Header/Header";
import { IMAGE_LIST } from "../constants";
import { PhotoListItem } from "../components/PhotoListItem";
import { Spacer } from "../components/Spacer";

export const ImageListScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="IMAGE LIST" />
        </Header.Group>
      </Header>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FlatList
          style={{ flex: 1 }}
          data={IMAGE_LIST}
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
    </View>
  );
};
