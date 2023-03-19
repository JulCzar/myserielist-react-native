import { StyleSheet } from 'react-native';
import { colors, viewport } from '../../../../../constants';

export const styles = StyleSheet.create({
  container: {
    elevation: 2,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    width: viewport.vw((220 / 220) * 50) - 24,
    height: viewport.vw((330 / 220) * 50) - 24,
  },
  serieInfo: {
    position: 'absolute',
    overflow: 'hidden',
    height: 105,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  row: { flexDirection: 'row' },
  cover: {
    width: viewport.vw((220 / 220) * 50) - 24,
    height: viewport.vw((330 / 220) * 50) - 24,
  },
  country: {
    color: colors['font.500'],
  },
  year: {
    color: colors['accent.400'],
    fontWeight: '700',
  },
  serieName: {
    color: colors['font.600'],
    fontWeight: '900',
    fontSize: 20,
  },
  tomato: {
    color: colors['font.500'],
  },
  genres: {
    color: colors['font.400'],
    overflow: 'hidden',
    fontSize: 12,
  },
});
