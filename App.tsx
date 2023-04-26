import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from "./src/screens/home/home";
import ListDetailsScreen from "./src/screens/list/ListDetailsScreen";
import ListsScreen from "./src/screens/list/ListsScreen";
import SettingsScreen from "./src/screens/settings/settings";

const navigator = createSwitchNavigator(
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
);

export default createAppContainer(navigator);
