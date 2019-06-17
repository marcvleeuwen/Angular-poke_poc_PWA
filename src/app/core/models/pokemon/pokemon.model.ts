import {PokemonTypes} from './pokemonType.model';
import {PokemonSprites} from './pokemonSprites.model';
import {PokemonAbility} from './pokemonAbility.model';

export interface Pokemon {
  id: number;
  order: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  weight: number;
  abilities: Array<PokemonAbility>;
  sprites: PokemonSprites;
  types: Array<PokemonTypes>;
}
