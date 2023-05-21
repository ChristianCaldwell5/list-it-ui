import BouncyCheckbox from "react-native-bouncy-checkbox";
import GlobalStyle from "../../styles/global-set";

interface CheckboxProps {
    text: string,
}

export default function Checkbox(props: CheckboxProps) {
    return (
        <BouncyCheckbox
            size={25}
            fillColor={GlobalStyle.colorSet.BtnFB}
            text={props.text}
            iconStyle={{ borderColor: GlobalStyle.colorSet.BtnFB }}
            innerIconStyle={{ borderWidth: 2 }}
            onPress={(isChecked: boolean) => {}}
        />
    )
}