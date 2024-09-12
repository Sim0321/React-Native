import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import Margin from "./Margin";

export default (props) => {
  return (
    props.isOpened && (
      <ScrollView showsVerticalScrollIndicator={false}>
        {props.data.map((item, i) => (
          <View key={i}>
            <Profile
              uri={item.uri}
              name={item.name}
              introduction={item.introduction}
            />
            <Margin height={13} />
          </View>
        ))}
      </ScrollView>
    )
  );
};
