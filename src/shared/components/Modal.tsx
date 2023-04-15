import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import GlobalSet from '../../shared/styles/global-set';
import GlobalStyles from "../styles/global-styles";
import ThemedText from "./ThemedText";

interface ModalProps {
    shouldDisplay: boolean
}

export default class Modal extends React.Component<ModalProps> {
    render(): React.ReactNode {
        return (
            <SafeAreaView style={style.backdropContainer}>
                
                <View style={[style.header, GlobalStyles.flexRow, GlobalStyles.spaceBetween, GlobalStyles.alignCenter, GlobalStyles.fullWidth]}>
                    <ThemedText
                        text={"Add List"}
                        bold={true}
                        fontSize={GlobalSet.fontSizes.xlarge}
                        color={GlobalSet.colorSet.bgBlack}>
                    </ThemedText>
                    <TouchableOpacity
                        onPress={() => { this.methodName() }}
                        style={[style.cancelBtn,  GlobalStyles.flexRow]}>
                        <MaterialIcons name='cancel' size={40} color={GlobalSet.colorSet.deleteRed}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

    methodName() {
        console.log("Clicked")
    }
}

const style = StyleSheet.create({
    backdropContainer: {
        flex: 1,
        opacity: 0.98,
        zIndex: 1,
        backgroundColor: GlobalSet.colorSet.WhiteGrey,
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
    },
    cancelBtn: {
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        paddingTop: 70,
        paddingHorizontal: 30
    }
});
