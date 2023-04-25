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
import { List, ListScreenState } from '../../shared/models/list';
import { ShortList } from '../../../assets/mocks/short-list';
import FormInput from '../../shared/components/FormInput';
import { useForm } from 'react-hook-form';

const styles = ListStyles;

function ListScreen2(props: any, state: ListScreenState) {
  const [ lists, setLists ] = useState(ShortList);
  const [ displayModal, setDisplayModal ] = useState(false);
  const { control, handleSubmit } = useForm();

  const displayAddListModal = () => {
    setDisplayModal(true);
  }

  const handleDisplayModal = (value: boolean) => {
    setDisplayModal(value);
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
      const newList: List = {
        title: data.listTitle,
        itemCount: 0,
        sharedCount: 0
      }
      setLists([...lists, newList]);
      setDisplayModal(false);
  }

  return (
      <SafeAreaView style={styles.container}>
      {displayModal && <Modal title={'New List'} shouldDisplay={(e) => handleDisplayModal(e)} children={addListModalContent()}></Modal>}
      <ScrollView style={styles.contentScrollView} contentContainerStyle={styles.contentContainer}>
        <View style={[styles.header, GlobalStyles.flexRow, GlobalStyles.spaceBetween, GlobalStyles.alignCenter, GlobalStyles.fullWidth]}>
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
          lists.map((list) => 
            <ListHintCard list={list} key={list.title}></ListHintCard>
          )
        }
      </ScrollView>
      <NavigationBar props={props}></NavigationBar>
    </SafeAreaView>
  )
}

export default ListScreen2;
