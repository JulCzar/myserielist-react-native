import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../constants';
import { useStatusBar } from '../../hooks/useStatusBar';
import Presentation from './components/Presentation';
import SerieCard from './components/SerieCard';
import { useHome } from './useHome';

const Home: React.FC = () => {
  const state = useHome();

  useStatusBar({
    backgroundColor: 'transparent',
    barStyle: 'light-content',
    translucent: true,
  });

  return (
    <View
      style={[StyleSheet.absoluteFill, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={StyleSheet.absoluteFill}>
        <FlatList
          numColumns={2}
          data={state.series}
          style={styles.flatList}
          ListFooterComponent={<ActivityIndicator />}
          onEndReached={state.loadNextPage}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<Presentation />}
          columnWrapperStyle={styles.flatListGap}
          contentContainerStyle={[styles.flatListContent, styles.flatListGap]}
          renderItem={({ item }) => (
            <SerieCard genres={state.getGenresOf(item)} serie={item} />
          )}
          keyExtractor={s => s.id + ''}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListGap: { gap: 16 },
  flatList: { marginHorizontal: 16 },
  flatListContent: { alignItems: 'stretch' },
});

export default Home;
