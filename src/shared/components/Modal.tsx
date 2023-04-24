import { MaterialIcons } from "@expo/vector-icons";
import React, { PropsWithChildren, ReactNode } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import GlobalSet from '../../shared/styles/global-set';
import GlobalStyles from "../styles/global-styles";
import ThemedText from "./ThemedText";

interface ModalProps {
    title: string;
    shouldDisplay: (value: boolean) => void;
    children: React.ReactNode;
}

export default class Modal extends React.Component<ModalProps> {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render(): React.ReactNode {
        return (
            <SafeAreaView style={style.backdropContainer}>
                <View style={[style.header, GlobalStyles.flexRow, GlobalStyles.spaceBetween, GlobalStyles.alignCenter, GlobalStyles.fullWidth]}>
                    <ThemedText
                        text={this.props.title}
                        bold={true}
                        fontSize={GlobalSet.fontSizes.xlarge}
                        color={GlobalSet.colorSet.bgBlack}>
                    </ThemedText>
                    <TouchableOpacity
                        onPress={this.dismissModal}
                        style={[style.cancelBtn,  GlobalStyles.flexRow]}>
                        <MaterialIcons name='cancel' size={40} color={GlobalSet.colorSet.deleteRed}/>
                    </TouchableOpacity>
                </View>
                <View style={style.children}>
                    {this.props.children}
                </View>
            </SafeAreaView>
        )
    }

    dismissModal = () => {
        this.props.shouldDisplay(false);
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
        paddingHorizontal: 30
    },
    cancelBtn: {
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        paddingTop: 70,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: GlobalSet.colorSet.appBlack
    },
    children: {
        marginTop: 30
    }
});
