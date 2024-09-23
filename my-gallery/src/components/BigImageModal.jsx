import { Image, Modal, Pressable, TouchableOpacity, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const ArrowButton = ({ iconName, onPress, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        height: "100%",
        paddingHorizontal: 20,
        justifyContent: "center",
      }}
    >
      <SimpleLineIcons
        name={iconName}
        size={20}
        color={disabled ? "transparent" : "black"}
      />
    </TouchableOpacity>
  );
};

export default ({
  modalVisible,
  onPressBackdrop,
  selectedImage,
  onPressLeftArrow,
  onPressRightArrow,
  showPreviousArrow,
  showNextArrow,
}) => {
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
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ArrowButton
            onPress={onPressLeftArrow}
            disabled={!showPreviousArrow}
            iconName="arrow-left"
          />

          <Pressable>
            <Image
              resizeMode="contain"
              source={{ uri: selectedImage?.uri }}
              style={{ width: 280, height: 280, backgroundColor: "white" }}
            />
          </Pressable>

          <ArrowButton
            onPress={onPressRightArrow}
            iconName="arrow-right"
            disabled={!showNextArrow}
          />
        </View>
      </Pressable>
    </Modal>
  );
};
