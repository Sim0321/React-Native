import React from "react";
import { Text as RNText } from "react-native";
import PropTypes from "prop-types";

// export class Typography extends React.Component {
//   render() {
//     return (
//       <RNText
//         style={{ color: this.props.color, fontSize: this.props.fontSize }}
//       >
//         {this.props.children}
//       </RNText>
//     );
//   }
// }

export const Typography = (props) => {
  return (
    <RNText style={{ color: props.color, fontSize: props.fontSize }}>
      {props.children}
    </RNText>
  );
};

// js에서 타입 체크 prop-types 사용
Typography.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
