import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { SerieDetails } from '../../../../models';
import { styles } from './styles';

interface iSinopseModal {
  onClose?(): void;
  serieDetails: SerieDetails | null;
}

const SinopseModal: React.FC<iSinopseModal> = props => (
  <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
    <Pressable
      onPress={props.onClose}
      style={[StyleSheet.absoluteFill, styles.pressable]}>
      <View style={styles.sinopseContainer}>
        <Text style={styles.sinopse}>{props.serieDetails?.overview}</Text>
      </View>
    </Pressable>
  </Animated.View>
);

export default SinopseModal;
