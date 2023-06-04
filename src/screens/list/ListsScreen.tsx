import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ListStyles from './styles/ListStyles';
import GlobalStyles from '../../shared/styles/global-styles';
import GlobalSet from '../../shared/styles/global-set';
import ThemedText from '../../shared/components/ThemedText';
import ListHintCard from './components/ListHintCard';
import NavigationBar from '../../shared/components/Navigation';
import Modal from '../../shared/components/Modal';
import { List } from '../../shared/models/list';
import FormInput from '../../shared/components/form/FormInput';
import { useForm } from 'react-hook-form';
import UserService from '../../services/user.service';

const styles = ListStyles;

function ListScreen(props) {
  const [ displayModal, setDisplayModal ] = useState(false);
  const { control, handleSubmit, reset } = useForm();
  const [ user, setUser ] = useState(UserService.getUser());
  const [ lists, setLists ] = useState(user.lists);

  const displayAddListModal = () => {
    setDisplayModal(true);
  }

  const handleDisplayModal = (value: boolean) => {
    setDisplayModal(value);
  }

  const selectList = (list: List, index: number) => {
    props.navigation.navigate('ListDetails', {
      list,
      index
    });
  }

  const addListModalContent = () => {
    return (
      <View>
        <ThemedText
          text={"Title"}
          bold={true}
          fontSize={GlobalSet.fontSizes.large}
          color={GlobalSet.colorSet.bgBlack}>
        </ThemedText>
        <FormInput name='listTitle' control={control}></FormInput>
        <ThemedText
          text={"Description (optional)"}
          bold={true}
          fontSize={GlobalSet.fontSizes.large}
          color={GlobalSet.colorSet.bgBlack}>
        </ThemedText>
        <FormInput name='listDescription' control={control}></FormInput>
        <Pressable style={styles.submit} onPress={handleSubmit(addList)}>
          <ThemedText
            text={"create"}
            bold={false}
            fontSize={GlobalSet.fontSizes.regular}
            color={GlobalSet.colorSet.WhiteGrey}>
          </ThemedText>
        </Pressable>
      </View>
    )
  }

  const addList = (data) => {
    // create new list
    const newList: List = {
      title: data.listTitle,
      description: data.listDescription,
      sharedCount: 0,
      items: [],
      completedItems: []
    }
    // reset form. A param can be passed to set default values
    reset(() => ({
      listTitle: '',
    }));
    // add new list to lists array
    setLists([...lists, newList]);
    // close modal
    setDisplayModal(false);
  }

  return (
    <SafeAreaView style={GlobalStyles.container}>
      {displayModal && <Modal title={'New List'} shouldDisplay={(e) => handleDisplayModal(e)} children={addListModalContent()}></Modal>}
      <ScrollView style={GlobalStyles.contentScrollView} contentContainerStyle={GlobalStyles.contentContainer}>
        <View style={[GlobalStyles.headerMargin, GlobalStyles.flexRow, GlobalStyles.spaceBetween, GlobalStyles.alignCenter, GlobalStyles.fullWidth, GlobalStyles.marginBottom20]}>
          <ThemedText
            text={"Your Lists"}
            bold={true}
            fontSize={GlobalSet.fontSizes.xlarge}
            color={GlobalSet.colorSet.bgBlack}>
          </ThemedText>
          <TouchableOpacity
            onPress={displayAddListModal}
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
          lists.length !== 0 &&
          lists.map((list, index) => 
            <TouchableOpacity
            onPress={() => selectList(list, index)}
            style={GlobalStyles.fullWidth}
            key={index}>
              <ListHintCard list={list} key={index}></ListHintCard>
            </TouchableOpacity>
          )
        }
        {
          lists.length === 0 &&
          <View style={styles.noListContainer}>
            <ThemedText
              text={"You don't have any lists right now"}
              bold={true}
              fontSize={GlobalSet.fontSizes.regular}
              color={GlobalSet.colorSet.grey}>
            </ThemedText>
            <ThemedText
              text={"Lists you create or shared with you will appear here"}
              bold={false}
              fontSize={GlobalSet.fontSizes.small}
              color={GlobalSet.colorSet.grey}
              align={'center'}>
            </ThemedText>
          </View>
        }
      </ScrollView>
      <NavigationBar props={props}></NavigationBar>
    </SafeAreaView>
  );
}

export default ListScreen;
