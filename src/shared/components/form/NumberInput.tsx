import React from "react";
import { StyleSheet } from 'react-native';
import { useController } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import GlobalSet from '../../styles/global-set';

export enum WidthType {
    full = '100%',
    half = '50%',
    quarter = '25%'
}

interface NumberInputProps {
    name: string;
    maxLength?: number;
    width?: WidthType;
    control?: any;
}

export default function FormInput(props: NumberInputProps) {
    const {field} = useController({
        control: props.control,
        name: props.name,
        defaultValue: ''
    });
    
    return (
        <TextInput
            value={field.value}
            onChangeText={field.onChange}
            style={[styles.input, {width: props.width ? props.width : WidthType.full}]}
            maxLength={props.maxLength}
            inputMode='numeric'
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: GlobalSet.colorSet.bgBlack,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: GlobalSet.fontSizes.regular
    }
});