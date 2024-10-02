import React from "react";
import { View } from "react-native";
import { Typography } from "./Typography";

export class Badge extends React.Component {
  render() {
    return (
      <View>
        <View>
          {this.props.children}

          {/* 위치 관련 부분만 따로 빼서 객체의 배열 형태로 유지보수 향상 */}
          <View
            style={[
              {
                width: 16,
                height: 16,
                borderRadius: 8,
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center",
              },
              { position: "absolute", right: -5, top: -5 },
            ]}
          >
            <Typography fontSize={this.props.fontSize} color="white">
              N
            </Typography>
          </View>
        </View>
      </View>
    );
  }
}
