
import { CheckBox } from '@rneui/themed';

interface CheckboxProps {
    text: string,
    isChecked: boolean,
    checked?: (value: boolean) => void;
}

export default function Checkbox(props: CheckboxProps) {

    const checkboxProps = props;

    const checked = (isChecked: boolean) => {
        props.checked(isChecked);
    }

    return (
        <CheckBox
            size={30}
            containerStyle={{backgroundColor: 'transparent', padding: 0}}
            title={checkboxProps.text}
            checked={checkboxProps.isChecked}
            onPress={() => checked(!checkboxProps.isChecked)}
        />
    )
}