import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from "./src/screens/home/home";
import ListDetailsScreen from "./src/screens/list/ListDetailsScreen";
import ListsScreen from "./src/screens/list/ListsScreen";
import SettingsScreen from "./src/screens/settings/settings";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";

export default class App extends React.Component {
    render() {

        const Navigator = createAppContainer(createSwitchNavigator(
            {
                Home: {
                    screen: HomeScreen,
                    navigationOptions: {title: "Home"}
                },
                List: {
                    screen: ListsScreen,
                    navigationOptions: {title: "List"}
                },
                ListDetails: {
                    screen:  ListDetailsScreen,
                    navigationOptions: {title: "List Details"}
                },
                Settings: {
                    screen: SettingsScreen,
                    navigationOptions: {title: "Settings"}
                }
            },
            {
                initialRouteName: "Home",
                defaultNavigationOptions: {
                    title: "Home",
                    headerLeft: () => null // disable back button in native header
                }
            }
        ));

        return (
            <GestureHandlerRootView style={{flex: 1}}>
                <Navigator/>
            </GestureHandlerRootView>
        )
    }
}
