import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
    View
} from 'react-native';
import ThemedText from "../../../shared/components/ThemedText";
import { ListHintCardProps } from "../../../shared/models/list";
import GlobalSet from '../../../shared/styles/global-set';
import GlobalStyles from '../../../shared/styles/global-styles';
import ListStyles from "../styles/ListStyles";

const styles = ListStyles;

export default class ListHintCard extends React.Component<ListHintCardProps> {

    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <View style={styles.cardContainer}>
              <View style={GlobalStyles.flexColumn}>
                <ThemedText
                  text={this.props.list.title}
                  bold={true}
                  fontSize={GlobalSet.fontSizes.large}
                  color={GlobalSet.colorSet.whiteLight}>
                </ThemedText>
                <View style={[{marginTop: 20}, GlobalStyles.flexRow, GlobalStyles.spaceBetween]}>
                  <ThemedText
                    text={this.props.list.items.length + " items"}
                    bold={false}
                    fontSize={GlobalSet.fontSizes.regular}
                    color={GlobalSet.colorSet.whiteLight}>
                  </ThemedText>
                  <View style={[GlobalStyles.flexRow, GlobalStyles.alignCenter]}>
                    <ThemedText
                      text={this.props.list.sharedCount}
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
}
