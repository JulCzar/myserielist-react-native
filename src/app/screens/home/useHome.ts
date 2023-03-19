import { useEffect, useRef, useState } from 'react';
import {
  APISeriesResponse,
  Genre,
  SerieInfo,
  SerieListPaginated,
} from '../../../models';
import tmdb from '../../../services/tmdb';
import { storageKeys } from '../../../constants';
import { useLoading } from '../../hooks/useLoding';
import { usePersistentStorage } from '../../hooks/usePersistentStorage';

export const useHome = () => {
  const [series, setSeries] = useState<SerieListPaginated>({});
  const [genres, setGenres] = useState<Genre[]>([]);
  const [tags, setTags] = useState<Genre[]>([]);
  const persistentStorage = usePersistentStorage();
  const [isLoading, loading] = useLoading();
  const requestSignalRef = useRef(false);
  const currPageRef = useRef(1);

  const loadNextPage = async () => {
    if (requestSignalRef.current || isLoading) {
      return;
    }
    requestSignalRef.current = true;
    if (series[currPageRef.current]) {
      currPageRef.current = currPageRef.current + 1;
      return;
    }

    const { data } = await tmdb.get<APISeriesResponse>('/popularToday', {
      params: { page: currPageRef.current },
    });

    const serieListPaginated: SerieListPaginated = {
      ...series,
      [currPageRef.current]: data.results,
    };

    setSeries(serieListPaginated);
    currPageRef.current = currPageRef.current + 1;
    requestSignalRef.current = false;
    loading.stop();
  };

  useEffect(() => {
    if (!persistentStorage) {
      return;
    }

    tmdb.get('/genres').then(({ data }) => setGenres(data));

    const tagsPersisted =
      persistentStorage.getItem<Genre[]>(storageKeys.TAGS) || [];
    const currPage =
      persistentStorage.getItem<number>(storageKeys.CURRENT_PAGE) || 1;
    const seriesPersisted = persistentStorage.getItem<SerieListPaginated>(
      storageKeys.SERIES,
    );

    if (!seriesPersisted) {
      loadNextPage();
      return;
    } else {
      setSeries(seriesPersisted);
      currPageRef.current = currPage;
    }

    setTags(tagsPersisted);
  }, [persistentStorage]); // eslint-disable-line react-hooks/exhaustive-deps

  const seriesList = Object.values(series).flat();

  const getGenresOf = (serie: SerieInfo) =>
    serie.genre_ids.map(id => {
      for (const genre of genres) {
        if (genre.id === id) {
          return genre.name;
        }
      }
      return '';
    });

  return {
    series: seriesList,
    loadNextPage,
    getGenresOf,
    genres,
    tags,
  };
};
