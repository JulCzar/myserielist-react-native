import { CrewMember } from './CrewMember';
import { Guest } from './Guest';

export interface Episode {
  air_date: string;
  episode_number: number;
  crew: CrewMember[];
  guest_stars: Guest[];
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}
