import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, viewport } from '../../../../../constants';
import { Episode } from '../../../../../models';

interface EpisodeItemProps {
  episode: Episode;
  checked: boolean;
  onPress?(): void;
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({
  episode,
  checked,
  onPress,
}) => (
  <Pressable onPress={onPress} style={styles.container}>
    <View
      style={[
        styles.contentContainer,
        { backgroundColor: checked ? 'green' : 'red' },
      ]}>
      <Text style={styles.title}>
        {episode.episode_number} - {episode.name}
      </Text>
      <Text style={styles.overview}>{episode.overview}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    borderTopWidth: 1,
    borderTopColor: '#fff8',
  },
  contentContainer: {
    gap: 4,
  },
  title: {
    color: colors['font.500'],
  },
  overview: {
    color: colors['font.500'],
    maxWidth: viewport.vw(100) - 32,
  },
});

export default EpisodeItem;
