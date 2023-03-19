import { BackdropBlur, Canvas, Image } from '@shopify/react-native-skia';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SerieDetails } from '../../../../../models';
import { dynamicMensures } from '../../dynamicMensures';
import { styles } from '../../styles';
import Tag from '../Tag';
import { useSerieArt } from './useSerieArt';

export interface iSerieArt {
  serieDetails: SerieDetails | null;
  onSinopsePress?(): void;
}

const SerieArt: React.FC<iSerieArt> = props => {
  const state = useSerieArt(props);

  return (
    <View style={styles.infoContainer}>
      <Canvas style={styles.canvas}>
        {state.serieBackdrop && (
          <Image
            image={state.serieBackdrop}
            height={dynamicMensures.CANVAS_HEIGHT}
            width={dynamicMensures.CANVAS_WIDTH}
            fit="cover"
            x={0}
            y={0}
          />
        )}
        <BackdropBlur blur={10} />
        {state.serieCover && (
          <Image
            x={dynamicMensures.IMAGE_X0}
            y={dynamicMensures.IMAGE_Y0}
            image={state.serieCover}
            height={dynamicMensures.IMAGE_HEIGHT}
            width={dynamicMensures.IMAGE_WIDTH}
            fit="contain"
            clip={state.clip}
          />
        )}
      </Canvas>

      <View style={styles.detailsContainer}>
        <Text style={styles.serieTitle}>{props.serieDetails?.name}</Text>
        {props.serieDetails?.first_air_date && (
          <Text style={styles.serieTitle}>
            ({new Date(props.serieDetails?.first_air_date).getFullYear()})
          </Text>
        )}
        <Text style={styles.detailTitle}>Tags</Text>
        <ScrollView
          contentContainerStyle={styles.tagsContainer}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {!props.serieDetails?.genres.length && <Text>Não há</Text>}
          {props.serieDetails?.genres.map(genre => (
            <Tag key={genre.id} onPress={state.searchTag(genre)}>
              {genre.name}
            </Tag>
          ))}
        </ScrollView>
        <Text style={styles.detailTitle}>Sinopse</Text>
        <Pressable onPress={props.onSinopsePress}>
          {({ pressed }) => (
            <Text
              numberOfLines={3}
              style={[styles.sinopse, { opacity: pressed ? 0.8 : 1 }]}>
              {props.serieDetails?.overview || 'Não  há'}
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default SerieArt;
