import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors['font.600'],
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: '#ffffff0f',
  },
  parentHr: {
    height: 1,
    color: 'white',
  },
  child: {
    backgroundColor: colors.backgroundSecondary,
  },
});
