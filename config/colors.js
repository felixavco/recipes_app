import { Platform } from 'react-native';

const primary_Android = '#d40000';
const primary_iOS = '#e04646'

export default {
  primary: Platform.OS === "android" ? primary_Android: primary_iOS,
  text: '#333333',
  header: Platform.OS === "android" ? primary_Android : '',
  headerText: Platform.OS === "android" ? 'white' : primary_iOS,
  white: '#ffffff',
  black: '#000000',
  gray200: '#DCDCDC',
}