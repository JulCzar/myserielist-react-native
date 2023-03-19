import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { iAccordion } from './types';
import { styles } from './styles';
import { useAccordion } from './useAccordion';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

const Accordion: React.FC<iAccordion> = props => {
  const state = useAccordion();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => {
          state.toggleExpand();
          props.onPress?.();
        }}>
        <Text style={[styles.title]}>{props.title}</Text>
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {state.isExpanded && (
        <Animated.View
          key={props.title}
          style={styles.child}
          entering={FadeInUp}
          exiting={FadeOutUp}>
          {props.children}
        </Animated.View>
      )}
    </View>
  );
};

export default Accordion;
