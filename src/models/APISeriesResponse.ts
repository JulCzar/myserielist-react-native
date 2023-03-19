import { SerieInfo } from './SerieInfo';

export interface APISeriesResponse {
  page: number;
  results: SerieInfo[];
  total_pages: number;
  total_results: number;
}
