import BouncyCheckbox from "react-native-bouncy-checkbox";
import { CheckBox } from '@rneui/themed';
import GlobalStyle from "../../styles/global-set";

interface CheckboxProps {
    text: string,
    isChecked: boolean,
    checked?: (value: boolean) => void;
}

export default function Checkbox(props: CheckboxProps) {

    const checkboxProps = props;
    console.log("Checkbox", checkboxProps.isChecked)

    const checked = (isChecked: boolean) => {
        props.checked(isChecked);
    }

    return (
        <CheckBox
            size={25}
            containerStyle={{backgroundColor: 'transparent', padding: 0}}
            title={checkboxProps.text}
            checked={checkboxProps.isChecked}
            onPress={() => checked(!checkboxProps.isChecked)}
        />
        // <BouncyCheckbox
        //     size={25}
        //     isChecked={checkboxProps.isChecked}
        //     fillColor={GlobalStyle.colorSet.BtnFB}
        //     text={props.text}
        //     iconStyle={{ borderColor: GlobalStyle.colorSet.BtnFB }}
        //     innerIconStyle={{ borderWidth: 2 }}
        //     onPress={(isChecked: boolean) => {checked(isChecked)}}
        // />
    )
}