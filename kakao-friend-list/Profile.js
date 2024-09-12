import { Text, View } from "react-native";
import Margin from "./Margin";
import styled from "styled-components/native";

export default ({ uri, name, introduction, isMine }) => {
  const size = isMine ? 50 : 40;
  return (
    <Container>
      <ProfileImage source={{ uri }} size={size} />
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
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
`;

const ProfileImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
`;
