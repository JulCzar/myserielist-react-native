import React, { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../constants';

const Tag: React.FC<PropsWithChildren<{ onPress?(): void }>> = ({
  children,
  onPress,
}) => (
  <Pressable onPress={onPress}>
    {({ pressed }) => (
      <View style={[styles.tagContainer, { opacity: pressed ? 0.7 : 1 }]}>
        <Text style={styles.tagText}>{children}</Text>
      </View>
    )}
  </Pressable>
);

const styles = StyleSheet.create({
  tagContainer: {
    backgroundColor: colors['accent.100'],
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  tagText: {
    color: colors['accent.500'],
  },
});

export default Tag;
