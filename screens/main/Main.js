import { View } from "react-native";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import MainStyle from "../../styles/screens/MainStyle";

const Main = () => {
    return (
        <View style={MainStyle.base}>
            <StatusBar style="auto" />
            <Header />
        </View>
    );
}

export default Main;