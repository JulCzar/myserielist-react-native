import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import Accordion from '../../components/Accordion';
import { useStatusBar } from '../../hooks/useStatusBar';
import EpisodeItem from './components/EpisodeItem';
import SerieArt from './components/SerieArt';
import SinopseModal from './components/SinopseModal';
import { styles } from './styles';
import { useDetails } from './useDetails';

const Details: React.FC = () => {
  const state = useDetails();

  useStatusBar({
    backgroundColor: 'transparent',
    barStyle: 'light-content',
    translucent: true,
  });

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaContainer}>
          <FlatList
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            fadingEdgeLength={100}
            ListHeaderComponent={
              <>
                <SerieArt
                  serieDetails={state.serieDetails}
                  onSinopsePress={state.sinopseDisclosure.onOpen}
                />

                <View style={styles.seasonsContainer}>
                  <Text style={styles.seasonContainerTitle}>Temporadas</Text>
                </View>
              </>
            }
            data={state.serieDetails?.seasons ?? []}
            renderItem={({ item: season }) => {
              const seasonData = state.seasons[season.id];

              return (
                <Accordion
                  title={`${season.name} - ${season.episode_count} episodes`}
                  onPress={() => state.loadSeasonEpisodes(season)}>
                  {!seasonData
                    ? 's'
                        .repeat(season.episode_count)
                        .split('')
                        .map((_, i) => (
                          <View key={i} style={{ backgroundColor: 'purple' }} />
                        ))
                    : seasonData.map(ep => (
                        <EpisodeItem
                          key={ep.id}
                          episode={ep}
                          checked={state.serie.episodeIsWatched(
                            state.serieDetails!,
                            ep,
                          )}
                          onPress={state.toggleEpisodeWatched(ep)}
                        />
                      ))}
                </Accordion>
              );
            }}
          />
        </SafeAreaView>
      </View>
      {state.sinopseDisclosure.isOpen && (
        <SinopseModal
          onClose={state.sinopseDisclosure.onClose}
          serieDetails={state.serieDetails}
        />
      )}
    </>
  );
};

export default Details;
