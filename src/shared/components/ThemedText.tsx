import { StyleSheet, Text } from 'react-native';
import GlobalStyle from '../styles/global-set';

const ThemedText = (props) => {
    return (
        <Text style={[{color: props.color, fontSize: props.fontSize, textAlign: props.align}, props.bold ? styles.bold : null]}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold'
    }
});
  
export default ThemedText;
