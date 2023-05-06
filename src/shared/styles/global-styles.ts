import { StyleSheet } from "react-native";
import GlobalSet from "./global-set";

const GlobalStyles = StyleSheet.create({
    // Structure
    container: {
        flex: 1,
        backgroundColor: GlobalSet.colorSet.WhiteGrey,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    contentScrollView: {
        flex: 1,
        width: '100%',
        paddingVertical: 0,
        paddingHorizontal: 25,
        marginBottom: 60
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        paddingTop: 40,
        paddingHorizontal: 5
    },
    subHeader: {
        paddingTop: 20,
        paddingHorizontal: 5
    },

    // Utility
    flexRow: {
        display: "flex",
        flexDirection: "row"
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column"
    },
    spaceBetween: {
        justifyContent: "space-between"
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    justifyCenter: {
        justifyContent: "center"
    },
    alignCenter: {
        alignItems: "center"
    },
    fullWidth: {
        width: "100%"
    }
});

export default GlobalStyles;
