import { Header } from "../components/Header/Header";
import { View } from "react-native";
import { Spacer } from "../components/Spacer";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

export const LinkDetailScreen = () => {
  const navigation = useNavigation();

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName="arrow-back" onPress={onPressBack} />
          <Spacer horizontal space={12} />
          <Header.Title title="LINK DETAIL" />
        </Header.Group>
      </Header>
    </View>
  );
};
