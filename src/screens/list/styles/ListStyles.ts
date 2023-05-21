import { StyleSheet } from 'react-native';
import GlobalSet from '../../../shared/styles/global-set';

const ListStyles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: GlobalSet.colorSet.LightGrey,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
    //overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: -3, height: 6},
    shadowOpacity: 0.50,
    shadowRadius: 3,
  },
  noListContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  addBtn: {
    fontSize: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtn: {
    fontSize: 20,
    paddingVertical: 10,
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
  