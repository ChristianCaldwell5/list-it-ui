import React from "react";
import { useController } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";

interface FormInputProps {
    name: string;
    control: any;
}

export class FormInput extends React.Component<FormInputProps> {
    constructor(props: FormInputProps) {
        super(props);
    }

    render(): React.ReactNode {
        const {field} = useController({
            control: this.props.control,
            name: this.props.name,
            defaultValue: ''
        })
        return (
            <TextInput
                value={field.value}
                onChangeText={field.onChange}
            />
        )
    }
}