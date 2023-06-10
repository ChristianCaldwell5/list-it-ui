import { StyleSheet } from "react-native";
import GlobalSet from "./global-set";

const GlobalStyles = StyleSheet.create({
    // Structure
    container: {
        flex: 1,
        backgroundColor: GlobalSet.colorSet.WhiteGrey,
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
    headerMargin: {
        marginTop: 40,
    },
    subHeaderMargin: {
        marginTop: 20,
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
    marginBottom20: {
        marginBottom: 20
    },
    alignCenter: {
        alignItems: "center"
    },
    fullWidth: {
        width: "100%"
    },
    rowPadding: {
        paddingHorizontal: 5
    },
    alignLeft: {
        alignContent: "flex-start"
    }
});

export default GlobalStyles;
