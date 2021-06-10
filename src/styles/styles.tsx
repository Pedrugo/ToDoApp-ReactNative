import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bbdefb',
    display: 'flex',
    flex: 1,
  },
  formContainer: {
    flex: 1,
    padding: 30,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 18,
  },
  textOnInput: {
    fontSize: 20,
    margin: 13,
    opacity: 0.5,
  },
  formButton: {
    alignSelf: 'center',
    backgroundColor: '#2196f3',
    borderRadius: 10,
    margin: 10,
    width: wp('20%'),
  },
  card: {
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
  },
  cardText: {
    fontSize: 18,
  },
  cardButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardButton: {
    borderRadius: 10,
    margin: 10,
    marginTop: 30,
    width: wp('25%'),
  },
  editButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: '#bbdefb',
    borderRadius: 10,
    flex: 1,
    margin: 50,
    width: wp('90%'),
  },
  jokeContainer: {
    borderRadius: 10,
    backgroundColor: '#2196f3',
    height: hp('20%'),
    marginHorizontal: 30,
    left: 10,
    width: wp('80%'),
  },
  jokeText: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    marginHorizontal: 30,
  },
  inputErrorContainer: {
    height: hp('3%'),
    marginTop: -20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputErrorText: {
    color: '#ff5722',
    fontSize: 14,
  },
});
