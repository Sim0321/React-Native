import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { useGallery } from "./src/hook/use-gallery";

const WIDTH = Dimensions.get("screen").width; // 전체 길이
const COLUMN_SIZE = WIDTH / 3;

export default function App() {
  const { images, imagesWithAddButton, pickImage, deleteImg } = useGallery();

  console.log(imagesWithAddButton);

  const onPressOpenGallery = () => {
    pickImage();
  };

  const onLongPressImage = (imageId) => {
    deleteImg(imageId);
  };

  const renderItem = ({ item: { id, uri }, index }) => {
    if (id === -1) {
      return (
        <TouchableOpacity
          onPress={onPressOpenGallery}
          style={{
            width: COLUMN_SIZE,
            height: COLUMN_SIZE,
            backgroundColor: "lightgrey",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "100", fontSize: 45 }}>+</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onLongPress={() => onLongPressImage(id)}>
        <Image
          source={{ uri }}
          style={{ width: COLUMN_SIZE, height: COLUMN_SIZE }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={imagesWithAddButton}
        renderItem={renderItem}
        // horizontal // 가로로 나열
        numColumns={3} // 가로로 몇개만 놓고 싶을 때
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});
