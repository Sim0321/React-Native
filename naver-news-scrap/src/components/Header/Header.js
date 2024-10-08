import React from "react";
import { Dimensions, useWindowDimensions, View } from "react-native";
import {
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Spacer } from "../Spacer";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderIcon } from "./HeaderButton";
import { HeaderGroup } from "./HeaderGroup";

// const { width } = Dimensions.get("window");

/* 컴파운드 컴포넌트 패턴 사용. */

export const Header = (props) => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  // console.log(insets);
  return (
    // <SafeAreaInsetsContext.Consumer>
    //  {(insets) => (
    <View style={{ paddingTop: insets.top }}>
      <View
        style={{
          width,
          flexDirection: "row",
          height: 56,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          alignItems: "center",
        }}
      >
        <Spacer horizontal space={12} />

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {props.children}
        </View>

        <Spacer horizontal space={12} />
      </View>
    </View>
    // )}
    // </SafeAreaInsetsContext.Consumer>
  );
};

Header.Title = HeaderTitle;
Header.Icon = HeaderIcon;
Header.Group = HeaderGroup;
