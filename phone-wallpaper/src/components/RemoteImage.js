import React from "react";
import { Image } from "react-native";

export const RemoteImage = (props) => {
  return (
    <Image
      source={{ uri: props.url }}
      style={[
        props.style,
        {
          width: props.width - 30,
          height: props.height,
          borderRadius: 15,
        },
      ]}
    />
  );
};
