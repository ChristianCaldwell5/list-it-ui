import { StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../global-styles';

const ThemedText = (props) => {
    return (
        <Text style={[{color: props.color, fontSize: props.fontSize}, props.bold ? styles.bold : null]}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold'
    }
});
  
export default ThemedText;
