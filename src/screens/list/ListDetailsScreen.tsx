import React from "react";
import { View } from "react-native";

function ListDetailsScreen(props) {
    const {state} = props.navigation;
    console.log(state.params.list.name)
    return (
        <View></View>
    );
}

export default ListDetailsScreen;