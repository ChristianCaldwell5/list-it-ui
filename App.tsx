import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from "./src/screens/home/home";
import ListScreen from "./src/screens/list/ListScreen";
import SettingsScreen from "./src/screens/settings/settings";

const navigator = createSwitchNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {title: "Home"}
        },
        List: {
            screen: ListScreen,
            navigationOptions: {title: "List"}
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
