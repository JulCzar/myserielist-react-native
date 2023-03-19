import { StyleSheet } from 'react-native';
import { viewport } from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000e',
    top: 0,
    left: 0,
    position: 'absolute',
    width: viewport.width,
    height: viewport.height,
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sinopseContainer: {
    width: viewport.width - 32,
  },
  sinopse: {
    color: 'white',
    textAlign: 'justify',
  },
});
