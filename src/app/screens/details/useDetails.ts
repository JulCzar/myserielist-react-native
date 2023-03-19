import { useEffect, useState } from 'react';
import { Episode, EpisodeRequest, Season, SerieDetails } from '../../../models';
import tmdb from '../../../services/tmdb';
import { useDisclosure } from '../../hooks/useDisclosure';
import { useRoute } from '../../hooks/useRoute';
import { useSerieCrud } from '../../hooks/useSerieCrud';

export const useDetails = () => {
  const [serieDetails, setSerieDetails] = useState<SerieDetails | null>(null);
  const [seasons, setSeason] = useState<Record<string, Episode[]>>({});
  const [isSerieLiked, setLiked] = useState(false);
  const sinopseDisclosure = useDisclosure();
  const serie = useSerieCrud();
  const route = useRoute('detail');
  const { id } = route.params;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await tmdb.get<SerieDetails>(`/serie/${id}`);

        setSerieDetails(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (serieDetails) {
      const _isSerieLiked = serie.isLiked(serieDetails);

      setLiked(_isSerieLiked);
    }
  }, [serieDetails?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  function loadSeasonEpisodes(season: Season) {
    if (seasons[season.id]) {
      return;
    }

    tmdb
      .get<EpisodeRequest>(`/serie/${id}/episodes/${season.season_number}`)
      .then(({ data }) => {
        setSeason({ ...seasons, [season.id]: data.episodes });
      })
      .catch(console.warn);
  }

  function toggleLikedSerie() {
    if (!serieDetails) {
      return;
    }

    if (serie.isLiked(serieDetails)) {
      serie.unlike(serieDetails);
      setLiked(false);
    } else {
      serie.like(serieDetails);
      setLiked(true);
    }
  }

  function toggleEpisodeWatched(episode: Episode) {
    return () => {
      if (!serieDetails) {
        return;
      }

      if (serie.episodeIsWatched(serieDetails, episode)) {
        serie.removeEpisodeFromWatchedList(serieDetails, episode);
      } else {
        serie.markEpisodeAsWatched(serieDetails, episode);
      }
    };
  }

  return {
    serieDetails,
    isSerieLiked,
    loadSeasonEpisodes,
    seasons,
    serie,
    toggleEpisodeWatched,
    sinopseDisclosure,
    toggleLikedSerie,
  };
};
