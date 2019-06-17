import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pokemon} from '../models/pokemon_v2/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {
  pokemon: Observable<{ pokemon: Array<Pokemon> }>;

  constructor(private  httpClient: HttpClient) {
  }

  public getAllPokemon(): Observable<{ pokemon: Array<Pokemon> }> {
    if (!this.pokemon) {
      const url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
      this.pokemon = this.httpClient.get(url) as Observable<{ pokemon: Array<Pokemon> }>;
      return this.pokemon;
    } else {
      return this.pokemon;
    }
  }

  public clearCache(): void {
    this.pokemon = undefined;
  }
}
