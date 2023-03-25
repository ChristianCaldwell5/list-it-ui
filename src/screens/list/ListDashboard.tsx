import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import GlobalStyle from '../../shared/global-styles';
import NavigationBar from '../../shared/navigation';
import ThemedText from '../../shared/simple-components/ThemedText';

/**
 * Main view when navigating to lists
 * @param props 
 * @returns List Dashboard Screen
 */
const ListDashboardScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentScrollView} contentContainerStyle={styles.contentContainer}>
        <ThemedText
          text={"Your Lists"}
          bold={true}
          fontSize={GlobalStyle.fontSizes.xlarge}
          color={GlobalStyle.colorSet.appBlack}>
        </ThemedText>
        <ListHintCard></ListHintCard>
        <ListHintCard></ListHintCard>
        <ListHintCard></ListHintCard>
        <ListHintCard></ListHintCard>
        <ListHintCard></ListHintCard>
        <ListHintCard></ListHintCard>
        <ListHintCard></ListHintCard>
        <ListHintCard></ListHintCard>
        <ListHintCard></ListHintCard>
        <ListHintCard></ListHintCard>
        <ListHintCard></ListHintCard>
        <ListHintCard></ListHintCard>
      </ScrollView>
      <NavigationBar props={props}></NavigationBar>
    </SafeAreaView>
  );
}

/**
 * Displays info for a particular list in dashboard
 * @param props 
 * @returns List Hint Card 
 */
const ListHintCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      <ThemedText
        text={"Example List"}
        bold={true}
        fontSize={GlobalStyle.fontSizes.large}
        color={GlobalStyle.colorSet.whiteLight}>
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colorSet.WhiteGrey,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  contentScrollView: {
    flex: 1,
    width: '100%',
    paddingTop: 0,
    paddingHorizontal: 25,
    marginBottom: 60
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardContainer: {
    width: '100%',
    minHeight: 100,
    backgroundColor: GlobalStyle.colorSet.LightGrey,
    borderRadius: 15,
    padding: 10,
    marginVertical: 20,
    overflow: 'hidden'
  },
});

export default ListDashboardScreen;
