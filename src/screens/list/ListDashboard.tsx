import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import GlobalSet from '../../shared/styles/global-set';
import GlobalStyles from '../../shared/styles/global-styles';
import NavigationBar from '../../shared/components/Navigation';
import ThemedText from '../../shared/components/ThemedText';
import { MaterialIcons } from '@expo/vector-icons';
import { ListCardProps, Lists } from '../../shared/models/list';
import { ShortList } from '../../../assets/mocks/short-list';

interface ListScreenState {
  lists: Lists[];
}

export default class ListDashboardScreen extends React.Component<{}, ListScreenState> {

  constructor(props) {
    super(props);

    this.state = {
      lists: []
    }
  }

  componentDidMount(): void {
    this.setState({ lists: ShortList })
  }

  render(): React.ReactNode {
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.contentScrollView} contentContainerStyle={styles.contentContainer}>
          <View style={[styles.header, GlobalStyles.flexRow, GlobalStyles.spaceBetween, GlobalStyles.alignCenter, GlobalStyles.fullWidth]}>
            <ThemedText
              text={"Your Lists"}
              bold={true}
              fontSize={GlobalSet.fontSizes.xlarge}
              color={GlobalSet.colorSet.bgBlack}>
            </ThemedText>
            <TouchableOpacity
              style={[styles.navBtn, GlobalStyles.flexRow]}>
                <ThemedText
                  text={"ADD"}
                  bold={true}
                  fontSize={GlobalSet.fontSizes.large}
                  color={GlobalSet.colorSet.BtnFB}>
                </ThemedText>
                <MaterialIcons name='add' size={20} color='black'/>
            </TouchableOpacity>
          </View>
          {
            this.state.lists.map((list) => 
              <ListHintCard lists={list} key={list.title}></ListHintCard>
            )
          }
        </ScrollView>
        <NavigationBar props={this.props}></NavigationBar>
      </SafeAreaView>
    )
  };

}

/**
  * Displays info for a particular list in dashboard
  * @param list 
  * @returns List Hint Card 
*/
 const ListHintCard = (props: ListCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={[GlobalStyles.flexColumn]}>
        <ThemedText
          text={props.lists.title}
          bold={true}
          fontSize={GlobalSet.fontSizes.large}
          color={GlobalSet.colorSet.whiteLight}>
        </ThemedText>
        <View style={[{marginTop: 20}, GlobalStyles.flexRow, GlobalStyles.spaceBetween]}>
          <ThemedText
            text={props.lists.itemCount + " items"}
            bold={false}
            fontSize={GlobalSet.fontSizes.regular}
            color={GlobalSet.colorSet.whiteLight}>
          </ThemedText>
          <View style={[GlobalStyles.flexRow, GlobalStyles.alignCenter]}>
            <ThemedText
              text={props.lists.sharedCount}
              bold={false}
              fontSize={GlobalSet.fontSizes.regular}
              color={GlobalSet.colorSet.whiteLight}>
            </ThemedText>
            <MaterialIcons name='person' size={20} color='black'/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalSet.colorSet.WhiteGrey,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contentScrollView: {
    flex: 1,
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 25,
    marginBottom: 60
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 5
  },
  cardContainer: {
    width: '100%',
    backgroundColor: GlobalSet.colorSet.LightGrey,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginVertical: 20,
    overflow: 'hidden'
  },
  navBtn: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
