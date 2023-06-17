import React from "react";
import { View, StyleSheet } from "react-native";
import GlobalStyle from "../../../shared/styles/global-set";
import GlobalStyles from "../../../shared/styles/global-styles";
import Checkbox from "../../../shared/components/form/Checkbox";
import { ListItem } from "../../../shared/models/list";
import ThemedText from "../../../shared/components/ThemedText";

interface ListItemProps {
    item: ListItem,
    key: number,
    checked: (value: boolean) => void;
}

export default function ListItemRow(props: ListItemProps) {

    const listItemProps = props;

    const handleIsChecked = (isChecked: boolean) => {
        listItemProps.checked(isChecked);
    }

    return (
        <View style={[styles.itemContainer, GlobalStyles.flexRow, GlobalStyles.alignCenter, GlobalStyles.spaceBetween]}>
            <Checkbox text={listItemProps.item.title} isChecked={listItemProps.item.isChecked} checked={(e) => handleIsChecked(e)}></Checkbox>
            <View style={[GlobalStyles.flexRow, GlobalStyles.alignCenter]}>
                {listItemProps.item.quantity && <ThemedText
                    text={'x'+listItemProps.item.quantity}
                    bold={false}
                    fontSize={GlobalStyle.fontSizes.small}
                    color={GlobalStyle.colorSet.LightGrey}>
                </ThemedText>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        padding: 10,
        borderColor: GlobalStyle.colorSet.BorderGrey,
        borderWidth: 2,
        borderRadius: 5,
        margin: 5
    }
});
