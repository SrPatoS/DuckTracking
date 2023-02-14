import { StyleSheet } from "react-native"
import Colors from "../../colors/Colors";
import { RFValue } from "react-native-responsive-fontsize";

const borderRadius = RFValue(20);

const HeaderStyle = StyleSheet.create({
    base: {
        backgroundColor: Colors.orange,
        width: '100%',
        height: '13%',
        elevation: 10,
        borderBottomEndRadius: borderRadius,
        borderBottomStartRadius: borderRadius
    }
});

export default HeaderStyle;