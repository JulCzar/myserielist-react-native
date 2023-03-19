import React from 'react';
import { Pressable, View, Text as RNText } from 'react-native';
import { SerieInfo } from '../../../../../models';
import { styles } from './styles';
import { useNavigation } from '../../../../hooks/useNavigation';
import { getPosterURI } from '../../../../../utils/getPosterURI';
import {
  BackdropBlur,
  Canvas,
  Image,
  rect,
  rrect,
  useImage,
} from '@shopify/react-native-skia';

interface SerieCardProps {
  serie: SerieInfo;
  genres: string[];
}

const SerieCard: React.FC<SerieCardProps> = ({ serie, genres }) => {
  const coverArt = useImage(getPosterURI(serie.poster_path, 220, 330));
  const clipCover = rrect(rect(0, 0, 220, 330), 10, 10);
  const clipBlur = rect(0, styles.container.height - 105, 220, 165);
  const navigation = useNavigation();
  const handlePressCard = () => {
    navigation.navigate('detail', {
      id: serie.id,
    });
  };

  return (
    <Pressable onPress={handlePressCard}>
      <Canvas style={styles.container}>
        {coverArt && (
          <Image
            clip={clipCover}
            image={coverArt}
            fit="cover"
            height={styles.cover.height}
            width={styles.cover.width}
          />
        )}
        <BackdropBlur blur={20} clip={clipBlur} />
      </Canvas>
      <View style={styles.serieInfo}>
        <View style={styles.row}>
          <RNText style={styles.country}>{serie.origin_country}, </RNText>
          <RNText style={styles.year}>
            {new Date(serie.first_air_date).getFullYear()}
          </RNText>
        </View>
        <RNText style={styles.serieName} numberOfLines={1} ellipsizeMode="tail">
          {serie.name}
        </RNText>
        <View>
          {/* <GiTomato color="#e30c0d" size={20} /> */}
          <RNText style={styles.tomato}>{serie.vote_average * 10}%</RNText>
        </View>
        <RNText style={styles.genres} numberOfLines={2} ellipsizeMode="tail">
          {genres.filter(i => i !== '').join(', ')}
        </RNText>
      </View>
    </Pressable>
  );
};

export default SerieCard;
