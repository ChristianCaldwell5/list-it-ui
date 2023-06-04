import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import FormInput from "../../shared/components/form/FormInput";
import NumberInput, { WidthType } from "../../shared/components/form/NumberInput";
import Modal from "../../shared/components/Modal";
import ThemedText from "../../shared/components/ThemedText";
import { ListItem } from "../../shared/models/list";
import GlobalSet from '../../shared/styles/global-set';
import GlobalStyles from "../../shared/styles/global-styles";
import ListStyles from "./styles/ListStyles";
import ListItemRow from "./components/ListItemRow";
import UserService from "../../services/user.service";

const styles = ListStyles;

function ListDetailsScreen(props) {
    // get navigation props
    const {navigation} = props;
    // get list from navigation props
    const [ list, setList ] = useState(navigation.getParam('list'));
    // get list index from navigation props
    const listIndex = navigation.getParam('index');
    // display modal state
    const [ displayModal, setDisplayModal ] = useState(false);
    // form hook
    const { control, handleSubmit, reset } = useForm();

    const displayAddListModal = () => {
        setDisplayModal(true);
    }

    const handleDisplayModal = (value: boolean) => {
        setDisplayModal(value);
    }

    const addItemModalContent = () => {
        return (
            <View>
                {/* Item Title */}
                <ThemedText
                    text={"Title"}
                    bold={true}
                    fontSize={GlobalSet.fontSizes.large}
                    color={GlobalSet.colorSet.bgBlack}>
                </ThemedText>
                <FormInput name='itemTitle' control={control}></FormInput>
                {/* Item Description */}
                <ThemedText
                    text={"Description (optional)"}
                    bold={true}
                    fontSize={GlobalSet.fontSizes.large}
                    color={GlobalSet.colorSet.bgBlack}>
                </ThemedText>
                <FormInput name='itemDescription' control={control}></FormInput>
                <View style={[GlobalStyles.flexRow, GlobalStyles.alignCenter, GlobalStyles.spaceBetween, GlobalStyles.marginBottom20]}>
                    <ThemedText
                        text={"Quantity (optional)"}
                        bold={true}
                        fontSize={GlobalSet.fontSizes.large}
                        color={GlobalSet.colorSet.bgBlack}>
                    </ThemedText>
                    <NumberInput name='itemQuantity' width={WidthType.quarter} control={control}></NumberInput>
                </View>
                {/* Submit Button */}
                <Pressable style={styles.submit} onPress={handleSubmit(addItem)}>
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

    const addItem = (data) => {
        // create new item
        const newItem: ListItem = {
            isChecked: false,
            title: data.itemTitle,
            description: data.itemDescription,
            quantity: data.itemQuantity,
            priority: 0,
        }
        // reset form. A param can be passed to set default values
        reset(() => ({
          listItem: '',
        }));
        // add new item to items array within list
        list.items.push(newItem);
        // update user list
        UserService.updateUserList(list, listIndex);
        // close modal
        setDisplayModal(false);
    }

    const handleIsChecked = (item: ListItem, isChecked: boolean, index) => {
        // update item checked value
        //item.isChecked = isChecked;
        // if item is checked, move to completed items array
        if (isChecked) {
            // remove item from items array
            list.items.splice(index, 1);
            // add checked item to completed items array
            
            list.completedItems.push(item);
            item.isChecked = true;
        } else {
            // remove item from completed items array
            list.completedItems.splice(index, 1);
            // add item to items array
            item.isChecked = false;
            list.items.push(item);
        }
        UserService.updateUserList(list, listIndex);
        setList({
            ...list,
            items: list.items,
            completedItems: list.completedItems,
        });
    }

    // navigate back to lists screen
    const navigateBackToLists = () => {
        props.navigation.navigate('List');
    }

    return (
        <SafeAreaView style={GlobalStyles.container}>
            {displayModal && <Modal title={'New Item'} shouldDisplay={(e) => handleDisplayModal(e)} children={addItemModalContent()}></Modal>}
            <ScrollView style={GlobalStyles.contentScrollView} contentContainerStyle={GlobalStyles.contentContainer}>
                <View style={[GlobalStyles.headerMargin, GlobalStyles.flexRow, GlobalStyles.fullWidth]}>
                    <TouchableOpacity
                        onPress={navigateBackToLists}
                        style={[styles.backBtn, GlobalStyles.flexRow]}>
                        <MaterialIcons name='chevron-left' size={20} color='black'/>
                        <ThemedText
                            text={"back"}
                            bold={false}
                            fontSize={GlobalSet.fontSizes.regular}
                            color={GlobalSet.colorSet.black}>
                        </ThemedText>
                    </TouchableOpacity>
                </View>
                <View style={[GlobalStyles.flexRow, GlobalStyles.spaceBetween, GlobalStyles.alignCenter, GlobalStyles.fullWidth]}>
                    <ThemedText
                        text={list.title}
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
                <View style={[GlobalStyles.subHeaderMargin, GlobalStyles.fullWidth, GlobalStyles.marginBottom20]}>
                    <ThemedText
                        text={list.description}
                        bold={false}
                        fontSize={GlobalSet.fontSizes.small}
                        color={GlobalSet.colorSet.LightGrey}>
                    </ThemedText>
                </View>
                {
                    list.items && list.items.length > 0 &&
                    list.items.map((item: ListItem, index) => 
                        <ListItemRow item={item} key={index} checked={(e) => handleIsChecked(item, e, index)}></ListItemRow>
                    )
                }
                <ThemedText
                    text={"Completed Items"}
                    bold={true}
                    fontSize={GlobalSet.fontSizes.large}
                    color={GlobalSet.colorSet.bgBlack}>
                </ThemedText>
                {
                    list.completedItems && list.completedItems.length > 0 &&
                    list.completedItems.map((item: ListItem, index) => 
                        <ListItemRow item={item} key={index} checked={(e) => handleIsChecked(item, e, index)}></ListItemRow>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default ListDetailsScreen;
