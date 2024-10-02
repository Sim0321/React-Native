import React from "react";
import { Image } from "react-native";

// export class LocalImage extends React.Component {
//   render() {
//     return (
//       <Image
//         source={this.props.localAsset}
//         style={[
//           this.props.style,
//           { width: this.props.width, height: this.props.height },
//         ]}
//       />
//     );
//   }
// }

export const LocalImage = (props) => {
  return (
    <Image
      source={props.localAsset}
      style={[props.style, { width: props.width, height: props.height }]}
    />
  );
};
