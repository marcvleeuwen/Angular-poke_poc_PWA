import {Evolution} from './evolution.model';

export interface Pokemon {
  id: number;
  num: string;
  name: string;
  img: string;
  type: Array<string>;
  height: string;
  weight: string;
  candy: string;
  egg: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers: Array<number>;
  weaknesses: Array<string>;
  prev_evolution: Array<Evolution>;
  next_evolution: Array<Evolution>;
}
