import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NavigationBar = (screen) => {
    const navProps = screen;
    return (
        <View style={styles.navigationContainer}>
            <TouchableOpacity
                style={[styles.navBtn, 
                        navProps.props.navigation.state.routeName==="List" ? styles.active : null]}
                onPress={() => routeToScreen('list', navProps)}>
                <MaterialIcons name='list' size={32} color='black'/>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.navBtn, 
                        navProps.props.navigation.state.routeName==="Home" ? styles.active : null]}
                onPress={() => routeToScreen('home', navProps)}>
                <MaterialIcons name='home' size={32} color='black'/>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.navBtn, 
                        navProps.props.navigation.state.routeName==="Settings" ? styles.active : null]}
                onPress={() => routeToScreen('settings', navProps)}>
                <MaterialIcons name='settings' size={32} color='black'/>
            </TouchableOpacity>
        </View>
    )
}

const routeToScreen = (screen, navProps) => {
    switch(screen) {
        case 'list':
            navProps.props.navigation.navigate("List");
            break;
        case 'settings':
            navProps.props.navigation.navigate("Settings");
            break;
        default:
            navProps.props.navigation.navigate("Home");
            break;
    }
}

const styles = StyleSheet.create({
    navigationContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 2,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flex: 1,
        backgroundColor: 'white'
    },
    navBtn: {
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderWidth: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    active: {
        backgroundColor: 'lightgray'
    }
})

export default NavigationBar;
