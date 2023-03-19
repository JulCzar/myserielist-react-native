import { StyleSheet } from 'react-native';
import { colors, viewport } from '../../constants';

export const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  errorTitleContainer: {
    alignItems: 'center',
    marginBottom: 18,
    width: viewport.vw(100),
  },
  errorTitle: {
    fontSize: 28,
    lineHeight: 33.6,
    fontWeight: '700',
    textAlign: 'center',
    color: colors['accent.400'],
  },
  errorSubtitle: {
    fontSize: 28,
    lineHeight: 33.6,
    fontWeight: '500',
    textAlign: 'center',
    color: colors['font.600'],
  },
  errorMessage: {
    fontSize: 14,
    maxWidth: 275,
    lineHeight: 21,
    fontWeight: '400',
    textAlign: 'center',
    color: colors['font.600'],
  },
  button: {
    width: 300,
    marginTop: 32,
    paddingTop: 12,
    borderRadius: 50,
    paddingBottom: 14,
    alignItems: 'center',
    backgroundColor: colors['accent.400'],
    paddingHorizontal: 28,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    lineHeight: 21.6,
    fontWeight: '500',
  },
});
