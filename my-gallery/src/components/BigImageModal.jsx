import { Image, Modal, Pressable, View } from "react-native";

export default ({ modalVisible, onPressBackdrop, selectedImage }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <Pressable
        onPress={onPressBackdrop}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `rgba(115,115,115, 0.5)`,
        }}
      >
        <Pressable>
          <Image
            resizeMode="contain"
            source={{ uri: selectedImage?.uri }}
            style={{ width: 280, height: 280, backgroundColor: "white" }}
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
};
