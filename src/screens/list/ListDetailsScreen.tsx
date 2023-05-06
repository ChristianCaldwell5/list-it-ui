import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import FormInput from "../../shared/components/form/FormInput";
import Modal from "../../shared/components/Modal";
import ThemedText from "../../shared/components/ThemedText";
import { ListItem } from "../../shared/models/list";
import GlobalSet from '../../shared/styles/global-set';
import GlobalStyles from "../../shared/styles/global-styles";
import ListStyles from "./ListStyles";

const styles = ListStyles;

function ListDetailsScreen(props) {
    // get navigation props
    const {navigation} = props;
    // get list from navigation props
    const list = navigation.getParam('list');
    // display modal state
    const [ displayModal, setDisplayModal ] = useState(false);
    // form hook
    const { control, handleSubmit, reset } = useForm();

    list.description = "This is a description for the list."

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
            checked: false,
            title: data.itemTitle,
            description: data.itemDescription,
            priority: 0,
        }
        // reset form. A param can be passed to set default values
        reset(() => ({
          listItem: '',
        }));
        // add new item to items array within list
        list.items.push(newItem);
        // close modal
        setDisplayModal(false);
    }

    return (
        <SafeAreaView style={GlobalStyles.container}>
            {displayModal && <Modal title={'New Item'} shouldDisplay={(e) => handleDisplayModal(e)} children={addItemModalContent()}></Modal>}
            <ScrollView style={GlobalStyles.contentScrollView} contentContainerStyle={GlobalStyles.contentContainer}>
                <View style={[GlobalStyles.header, GlobalStyles.flexRow, GlobalStyles.spaceBetween, GlobalStyles.alignCenter, GlobalStyles.fullWidth]}>
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
                <View style={[GlobalStyles.subHeader, GlobalStyles.fullWidth]}>
                    <ThemedText
                        text={list.description}
                        bold={false}
                        fontSize={GlobalSet.fontSizes.small}
                        color={GlobalSet.colorSet.LightGrey}>
                    </ThemedText>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ListDetailsScreen;
