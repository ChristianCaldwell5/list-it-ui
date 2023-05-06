import React from "react";
import { StyleSheet } from 'react-native';
import { useController } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import GlobalSet from '../../styles/global-set';

interface FormInputProps {
    name: string;
    control?: any;
}

export default function FormInput(props: FormInputProps) {
    const {field} = useController({
        control: props.control,
        name: props.name,
        defaultValue: ''
    })
    return (
        <TextInput
            value={field.value}
            onChangeText={field.onChange}
            style={styles.input}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderColor: GlobalSet.colorSet.bgBlack,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        fontSize: GlobalSet.fontSizes.regular
    }
});
