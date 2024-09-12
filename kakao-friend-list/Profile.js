import { Image, Text, View } from "react-native";
import Margin from "./Margin";

export default ({ uri, name, introduction, isMine }) => {
  const size = isMine ? 50 : 40;
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri }}
        style={{ width: size, height: size, borderRadius: "50%" }}
      />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text
          style={{
            fontWeight: isMine ? "bold" : "",
            fontSize: isMine ? 16 : 15,
          }}
        >
          {name}
        </Text>

        {introduction && (
          <View>
            <Margin height={isMine ? 6 : 2} />
            <Text style={{ fontSize: isMine ? 12 : 11, color: "grey" }}>
              {introduction}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
