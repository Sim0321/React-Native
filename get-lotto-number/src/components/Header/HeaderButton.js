import React from "react";
import { Button } from "../Button";
import { Icon } from "../Icons";

// export class HeaderIcon extends React.Component {
//   render() {
//     return (
//       <Button onPress={this.props.onPress}>
//         <Icon name={this.props.iconName} size={28} color="black" />
//       </Button>
//     );
//   }
// }

export const HeaderIcon = (props) => {
  return (
    <Button onPress={props.onPress}>
      <Icon name={props.iconName} size={28} color="black" />
    </Button>
  );
};
