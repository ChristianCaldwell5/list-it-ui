import React, { useState } from 'react';
import { Button, Pressable, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ListStyles from './ListStyles';
import GlobalStyles from '../../shared/styles/global-styles';
import GlobalSet from '../../shared/styles/global-set';
import ThemedText from '../../shared/components/ThemedText';
import ListHintCard from './components/ListHintCard';
import NavigationBar from '../../shared/components/Navigation';
import Modal from '../../shared/components/Modal';
import { List } from '../../shared/models/list';
import FormInput from '../../shared/components/form/FormInput';
import { useForm } from 'react-hook-form';

const styles = ListStyles;

function ListScreen2(props: any) {
  const [ lists, setLists ] = useState([]);
  const [ displayModal, setDisplayModal ] = useState(false);
  const { control, handleSubmit, reset } = useForm();

  const displayAddListModal = () => {
    setDisplayModal(true);
  }

  const handleDisplayModal = (value: boolean) => {
    setDisplayModal(value);
  }

  const selectList = (list: List) => {
    props.navigation.navigate('ListDetails', {
      list 
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
      itemCount: 0,
      sharedCount: 0,
      items: [],
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
        <View style={[GlobalStyles.header, GlobalStyles.flexRow, GlobalStyles.spaceBetween, GlobalStyles.alignCenter, GlobalStyles.fullWidth]}>
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
            onPress={() => selectList(list)}
            style={GlobalStyles.fullWidth}
            key={index}>
              <ListHintCard list={list} key={list.title}></ListHintCard>
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
  )
}

export default ListScreen2;
