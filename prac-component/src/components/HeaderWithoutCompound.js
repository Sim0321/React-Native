import React from "react";
import { Dimensions, View } from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { Spacer } from "./Spacer";
import { Button } from "./Button";
import { Icon } from "./Icons";
import { Typography } from "./Typography";

const { width } = Dimensions.get("window");

{
  /* 이렇게 되면 헤더 컴포넌트를 직접 수정해야함 */
}
// export class HeaderWithoutCompound extends React.Component {
//   render() {
//     return (
//       <SafeAreaInsetsContext.Consumer>
//         {(insets) => (
//           <View style={{ paddingTop: insets.top }}>
//             <View
//               style={{
//                 width,
//                 height: 56,
//                 flexDirection: "row",
//                 borderBottomColor: "gray",
//                 borderBottomWidth: 1,
//               }}
//             >
//               <Spacer horizontal space={12} />
//               <View
//                 style={{
//                   flex: 1,
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <View
//                   style={{
//                     flexDirection: "row",
//                     alignItems: "center",
//                   }}
//                 >
//                   {this.props.leftIcon && (
//                     <Button onPress={this.props.leftIcon}>
//                       <Icon iconName={this.props.leftIcon.iconName} size={28} />
//                     </Button>
//                   )}
//                   <Typography fontSize={18}>{this.props.title}</Typography>
//                 </View>

//                 {this.props.rightIcon && (
//                   <Button onPress={this.props.rightIcon}>
//                     <Icon iconName={this.props.rightIcon.iconName} size={28} />
//                   </Button>
//                 )}
//               </View>
//               <Spacer horizontal space={12} />
//             </View>
//           </View>
//         )}
//       </SafeAreaInsetsContext.Consumer>
//     );
//   }
// }

export const HeaderWithoutCompound = (props) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View style={{ paddingTop: insets.top }}>
          <View
            style={{
              width,
              height: 56,
              flexDirection: "row",
              borderBottomColor: "gray",
              borderBottomWidth: 1,
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {props.leftIcon && (
                  <Button onPress={props.leftIcon}>
                    <Icon iconName={props.leftIcon.iconName} size={28} />
                  </Button>
                )}
                <Typography fontSize={18}>{props.title}</Typography>
              </View>

              {props.rightIcon && (
                <Button onPress={props.rightIcon}>
                  <Icon iconName={props.rightIcon.iconName} size={28} />
                </Button>
              )}
            </View>
            <Spacer horizontal space={12} />
          </View>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};
