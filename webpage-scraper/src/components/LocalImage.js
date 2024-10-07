import React from "react";
import { Image } from "react-native";

export const LocalImage = (props) => {
  return (
    <Image
      source={props.localAsset}
      style={[props.style, { width: props.width, height: props.height }]}
    />
  );
};
