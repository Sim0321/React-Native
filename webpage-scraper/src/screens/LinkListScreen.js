import React, { useCallback } from "react";
import { View, Text, FlatList } from "react-native";
import { Header } from "../components/Header/Header";
import { Button } from "../components/Button";
import { Typography } from "../components/Typography";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../components/Spacer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "../components/Icons";
import { useRecoilValue } from "recoil";
import { atomLinkList } from "../atoms/atomLinkList";
import { removeItem } from "../utils/AsyncStorageUtils";

export const LinkListScreen = () => {
  const navigation = useNavigation();
  const safeAreaInset = useSafeAreaInsets();

  const onPressListItem = useCallback((item) => {
    navigation.navigate("LinkDetail", { item });
  }, []);

  const onPressAddButton = useCallback(() => {
    navigation.navigate("AddLink");
    // console.log("눌림");
    // removeItem("MAIN/LINK_LIST");
  }, []);

  const onPressClearAll = () => {
    removeItem("MAIN/LINK_LIST");
  };

  const data = useRecoilValue(atomLinkList);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="LINK LIST" />
        </Header.Group>
      </Header>
      {/* <View style={{ flex: 1 }}>
        <Button onPress={onPressButton}>
          <Typography>Link DETAIL로 이동</Typography>
        </Button>

        <Spacer space={12} />

        
      </View> */}

      {/* <Button onPress={onPressAddButton}>
        <Typography>ADD Link로 이동</Typography>
      </Button> */}

      <Button onPress={onPressClearAll} style={{ backgroundColor: "pink" }}>
        <Typography>초기화 버튼</Typography>
      </Button>

      <FlatList
        style={{ flex: 1 }}
        data={data.list}
        renderItem={({ item }) => {
          return (
            <Button
              onPress={() => {
                onPressListItem(item);
              }}
              paddingHorizontal={24}
              paddingVertical={24}
            >
              <View>
                <Typography fontSize={20}>{item.link}</Typography>

                <Spacer space={4} />

                <Typography fontSize={16} color="gray">
                  {item.title !== "" ? `${item.title.slice(0, 20)} | ` : ""}
                  {new Date(item.createdAt).toLocaleString("ko-KR")}
                </Typography>
              </View>
            </Button>
          );
        }}
      />

      <View
        style={{
          position: "absolute",
          right: 24,
          bottom: 24 + safeAreaInset.bottom,
        }}
      >
        <Button onPress={onPressAddButton}>
          <View
            style={{
              width: 52,
              height: 52,
              borderRadius: 52 / 2,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
            }}
          >
            <Icon name="add" color="white" size={32} />
          </View>
        </Button>
      </View>
    </View>
  );
};
