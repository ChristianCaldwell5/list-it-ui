import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
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
