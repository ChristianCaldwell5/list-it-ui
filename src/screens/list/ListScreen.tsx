import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import GlobalSet from '../../shared/styles/global-set';
import GlobalStyles from '../../shared/styles/global-styles';
import NavigationBar from '../../shared/components/Navigation';
import ThemedText from '../../shared/components/ThemedText';
import { MaterialIcons } from '@expo/vector-icons';
import ListHintCard from './components/ListHintCard';
import { ShortList } from '../../../assets/mocks/short-list';
import ListStyles from './ListStyles';
import { ListScreenState } from '../../shared/models/list';
import Modal from '../../shared/components/Modal';
import FormInput from '../../shared/components/FormInput';
import { useForm } from 'react-hook-form';

const styles = ListStyles;

export default class ListScreen extends React.Component<{}, ListScreenState> {

  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      displayModal: false
    }
  }

  componentDidMount(): void {
    this.setState({ lists: ShortList })
  }

  render(): React.ReactNode {
    return(
      <SafeAreaView style={styles.container}>
        {this.state.displayModal && <Modal title={'New List'} shouldDisplay={(e) => this.handleDisplayModal(e)} children={this.addListModalContent()}></Modal>}
        <ScrollView style={styles.contentScrollView} contentContainerStyle={styles.contentContainer}>
          <View style={[styles.header, GlobalStyles.flexRow, GlobalStyles.spaceBetween, GlobalStyles.alignCenter, GlobalStyles.fullWidth]}>
            <ThemedText
              text={"Your Lists"}
              bold={true}
              fontSize={GlobalSet.fontSizes.xlarge}
              color={GlobalSet.colorSet.bgBlack}>
            </ThemedText>
            <TouchableOpacity
              onPress={this.displayAddListModal}
              style={[styles.addBtn, GlobalStyles.flexRow]}>
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
              <ListHintCard list={list} key={list.title}></ListHintCard>
            )
          }
        </ScrollView>
        <NavigationBar props={this.props}></NavigationBar>
      </SafeAreaView>
    )
  };

  private addListModalContent(): JSX.Element {
    const { control, handleSubmit } = useForm();
    return (
      <View>
        <FormInput name='listTitle' control={control}></FormInput>
        <Button title='Submit' onPress={handleSubmit(this.addList)}></Button>
      </View>
    )
  }

  private displayAddListModal = () => {
    this.setState({ displayModal: true });
  }

  handleDisplayModal(value: boolean): void {
    this.setState({ displayModal: value });
  }

  addList(data) {
    console.log(data)
  }

}
