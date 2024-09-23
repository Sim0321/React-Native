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
import MyDropDownPicker from "./src/components/MyDropDownPicker";
import TextInputModal from "./src/components/TextInputModal";

const WIDTH = Dimensions.get("screen").width; // 전체 길이
const COLUMN_SIZE = WIDTH / 3;

export default function App() {
  const {
    selectedAlbum,
    imagesWithAddButton,
    pickImage,
    deleteImg,
    modalVisible,
    openModal,
    closeModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    isDropdownOpen,
    openDropDown,
    closeDropDown,
    albums,
    selectAlbum,
    deleteAlbum,
  } = useGallery();

  const onPressOpenGallery = () => {
    pickImage();
  };

  const onLongPressImage = (imageId) => {
    deleteImg(imageId);
  };

  const onPressAddAlbum = () => {
    openModal();
  };

  const onSubmitEditing = () => {
    if (!albumTitle) return;
    // 1. 앨범에 타이틀 추가
    addAlbum();

    // 2. TextInput의 value 초기화 && 모달 닫기
    closeModal();
    resetAlbumTitle();
  };

  const onPressBackdrop = () => {
    closeModal();
  };

  const onPressHeader = () => {
    if (isDropdownOpen) {
      closeDropDown();
    } else {
      openDropDown();
    }
  };

  const onPressAlbum = (album) => {
    selectAlbum(album);
    closeDropDown();
  };

  const onLongPressAlbum = (albumId) => {
    deleteAlbum(albumId);
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
      {/* 앨범 DropDown, 앨범 추가 버튼 */}
      <MyDropDownPicker
        selectedAlbum={selectedAlbum}
        onPressAddAlbum={onPressAddAlbum}
        isDropdownOpen={isDropdownOpen}
        onPressHeader={onPressHeader}
        albums={albums}
        onPressAlbum={onPressAlbum}
        onLongPressAlbum={onLongPressAlbum}
      />

      {/* 앨범을 추가하는 TextInputModal */}
      <TextInputModal
        modalVisible={modalVisible}
        albumTitle={albumTitle}
        setAlbumTitle={setAlbumTitle}
        onSubmitEditing={onSubmitEditing}
        onPressBackdrop={onPressBackdrop}
      />

      <FlatList
        data={imagesWithAddButton}
        renderItem={renderItem}
        // horizontal // 가로로 나열
        numColumns={3} // 가로로 몇개만 놓고 싶을 때
        style={{
          zIndex: -1,
        }}
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
