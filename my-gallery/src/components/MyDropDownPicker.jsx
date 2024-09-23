import { Text, TouchableOpacity, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
``;

const HEADER_HEIGHT = 50;

export default ({
  selectedAlbum,
  onPressAddAlbum,
  onPressHeader,
  isDropdownOpen,
  albums,
  onPressAlbum,
  onLongPressAlbum,
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPressHeader}
        style={{
          height: HEADER_HEIGHT,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{selectedAlbum.title}</Text>
        <SimpleLineIcons
          name={isDropdownOpen ? "arrow-up" : "arrow-down"}
          size={12}
          color="black"
          style={{ marginLeft: 8 }}
        />

        <TouchableOpacity
          onPress={onPressAddAlbum}
          style={{
            position: "absolute",
            right: 0,
            justifyContent: "center",
            alignItems: "center",
            height: HEADER_HEIGHT,
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 12 }}>앨범추가</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View
          style={{
            width: "100%",
            position: "absolute",
            top: HEADER_HEIGHT,
            borderBottomWidth: 0.5,
            borderBottomColor: "lightgrey",
            borderTopWidth: 0.5,
            borderTopColor: "lightgrey",
          }}
        >
          {albums.map((album, index) => {
            const isSelectedAlbum = album.id === selectedAlbum.id;
            return (
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  paddingVertical: 12,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                }}
                onPress={() => onPressAlbum(album)}
                onLongPress={() => onLongPressAlbum(album.id)}
                key={`album-${index}`}
              >
                <Text
                  style={{ fontWeight: isSelectedAlbum ? "bold" : undefined }}
                >
                  {album.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};
