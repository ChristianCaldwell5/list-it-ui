import { StyleSheet } from 'react-native';
import GlobalSet from '../../shared/styles/global-set';

const ListStyles = StyleSheet.create({
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
    addBtn: {
      fontSize: 20,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderWidth: 2,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      marginBottom: 10,
    },
    submit: {
      width: '100%',
      backgroundColor: GlobalSet.colorSet.BtnFB,
      borderRadius: 5,
      padding: 10,
      marginVertical: 5,
      alignItems: 'center',
      fontSize: GlobalSet.fontSizes.regular
  }
});

export default ListStyles;
  