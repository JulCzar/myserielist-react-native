import { rect, rrect, useImage } from '@shopify/react-native-skia';
import { Duration } from 'persistor-node';
import { storageKeys } from '../../../../../constants';
import { Genre } from '../../../../../models';
import { getBackdropURI } from '../../../../../utils/getBackdropURI';
import { getPosterURI } from '../../../../../utils/getPosterURI';
import { useNavigation } from '../../../../hooks/useNavigation';
import { usePersistentStorage } from '../../../../hooks/usePersistentStorage';
import { dynamicMensures, IMAGE_RADIUS } from '../../dynamicMensures';
import { iSerieArt } from './index';

export const useSerieArt = (props: iSerieArt) => {
  const persistentStorage = usePersistentStorage();
  const navigation = useNavigation();

  const serieCover = useImage(getPosterURI(props.serieDetails?.poster_path));
  const serieBackdrop = useImage(
    getBackdropURI(props.serieDetails?.backdrop_path),
  );

  const clip = rrect(
    rect(
      dynamicMensures.IMAGE_X0,
      dynamicMensures.IMAGE_Y0,
      dynamicMensures.IMAGE_WIDTH,
      dynamicMensures.IMAGE_HEIGHT,
    ),
    IMAGE_RADIUS,
    IMAGE_RADIUS,
  );

  const searchTag = (tag: Genre) => () => {
    persistentStorage?.setItem(storageKeys.TAGS, [tag], {
      expireIn: new Duration({ minutes: 5 }),
    });

    navigation.navigate('home');
  };

  return {
    serieCover,
    serieBackdrop,
    clip,
    searchTag,
  };
};
