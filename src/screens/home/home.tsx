import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from '../../shared/components/Navigation';
import ThemedText from '../../shared/components/ThemedText';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <ThemedText text={"Hello Christian"} color={'yellow'}></ThemedText>
      <ThemedText text={"Hello Chris"} color={'blue'}></ThemedText>
      <ThemedText text={"Hello BITCH"} color={'purple'}></ThemedText>
      <ThemedText text={"Hello FAT ASS"} color={'pink'}></ThemedText>
      <StatusBar style={"auto"}/>
      <NavigationBar props={props}></NavigationBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080F0F',
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor: 'white'
  }
});

export default HomeScreen;
