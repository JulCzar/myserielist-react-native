import { StyleSheet } from 'react-native';
import { colors, viewport } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  safeAreaContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingTop: 48,
    paddingBottom: 24,
  },
  infoContainer: {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: viewport.vw(100) - 32,
    height: viewport.vmin(150),
    overflow: 'hidden',
    borderRadius: 16,
  },
  canvas: {
    position: 'absolute',
    width: viewport.vmin(100) - 32,
    height: viewport.vmin(150),
  },
  serieTitle: {
    color: colors['font.600'],
    fontWeight: 'bold',
    fontSize: 24,
  },
  detailsContainer: {
    marginTop: viewport.vmin(100),
    paddingHorizontal: 8,
    flex: 1,
  },
  detailTitle: {
    color: colors['font.400'],
    marginTop: 12,
  },
  tagsContainer: {
    gap: 4,
  },
  sinopse: {
    color: colors['font.600'],
    textAlign: 'justify',
  },
  seasonsContainer: {
    marginVertical: 16,
  },
  seasonContainerTitle: {
    fontWeight: 'bold',
    color: 'white',
  },
  seasonTitleContainer: {
    height: 50,
    borderTopWidth: 1,
    paddingHorizontal: 8,
    justifyContent: 'center',
    borderTopColor: 'rgba(255, 255, 255, 0.5)',
  },
  seasonTitle: {
    color: colors['font.500'],
    textAlign: 'left',
  },
});
