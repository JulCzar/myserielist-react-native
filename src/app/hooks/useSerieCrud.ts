import { useEffect, useState } from 'react';
import { storageKeys } from '../../constants';
import { Episode, SerieDetails } from '../../models';
import { usePersistentStorage } from './usePersistentStorage';

export const useSerieCrud = () => {
  const persistentStorage = usePersistentStorage();
  const [, setUpdateCounter] = useState(0);

  useEffect(() => {
    persistentStorage?.subscribe(() => {
      setUpdateCounter(x => ++x);
    });
  }, [persistentStorage]);

  const getLiked = () =>
    persistentStorage?.getItem<SerieDetails[]>(storageKeys.LIKED) || [];

  const like = (serie: SerieDetails) => {
    const likedSeries = getLiked();

    if (!likedSeries.map(l => l.id).includes(serie.id)) {
      likedSeries.push(serie);
    }

    persistentStorage?.setItem(storageKeys.LIKED, likedSeries);
  };

  const unlike = (serie: SerieDetails) => {
    const likedSeries = getLiked();

    const filteredLikedSeries = likedSeries.filter(s => s.id !== serie.id);

    persistentStorage?.setItem(storageKeys.LIKED, filteredLikedSeries);
  };

  const isLiked = (serie: SerieDetails) => {
    const likedSeries = getLiked();

    if (!likedSeries) {
      return false;
    }

    for (const storedSerie of likedSeries) {
      if (storedSerie.id === serie.id) {
        return true;
      }
    }

    return false;
  };

  const getWatched = () =>
    persistentStorage?.getItem<Record<string, number[]>>(storageKeys.WATCHED) ||
    {};

  const markEpisodeAsWatched = (serie: SerieDetails, episode: Episode) => {
    const watchedSeries = getWatched();

    const serieWatchedEpisodes = watchedSeries[serie.id] || [];

    if (!serieWatchedEpisodes.includes(episode.id)) {
      serieWatchedEpisodes.push(episode.id);
    }

    watchedSeries[serie.id] = serieWatchedEpisodes;

    persistentStorage?.setItem(storageKeys.WATCHED, watchedSeries);
  };

  const removeEpisodeFromWatchedList = (
    serie: SerieDetails,
    episode: Episode,
  ) => {
    const watchedSeries = getWatched();

    const serieWatchedEpisodes = watchedSeries[serie.id] || [];

    const filteredSerieWatchedEpisodes = serieWatchedEpisodes.filter(
      e => e !== episode.id,
    );

    watchedSeries[serie.id] = filteredSerieWatchedEpisodes;

    persistentStorage?.setItem(storageKeys.WATCHED, watchedSeries);
  };

  const episodeIsWatched = (serie: SerieDetails, episode: Episode) => {
    const watchedSeries = getWatched();

    const serieWatchedEpisodes = watchedSeries[serie.id] || [];

    return serieWatchedEpisodes.includes(episode.id);
  };

  return {
    getLiked,
    like,
    unlike,
    isLiked,
    getWatched,
    markEpisodeAsWatched,
    removeEpisodeFromWatchedList,
    episodeIsWatched,
  };
};
