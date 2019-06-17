import {Component, OnInit} from '@angular/core';
import {PokeAPIService} from './core/services/poke-api.service';
import {Pokemon} from './core/models/pokemon_v2/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-poke-poc';
  isSearching = false;
  pokemonArr: Array<Pokemon> = [];
  searchTerm: string;
  public selectedPokemon: Pokemon;

  constructor(private apiService: PokeAPIService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  public setSearching(): void {
    this.isSearching = !this.isSearching;

    if (!this.isSearching) {
      this.searchTerm = undefined;
    }
  }

  public searchList(term: string = ''): Array<Pokemon> {
    this.searchTerm = term;
    if (this.isSearching && term.length > 0) {
      return this.pokemonArr.filter((item: Pokemon) => {
        return item.name.toLocaleLowerCase().indexOf(term) > -1
          || String(item.id).toLocaleLowerCase().indexOf(term) > -1;
      });
    } else {
      return this.pokemonArr;
    }
  }

  //  get selected pokemon
  public onPokemonSelected(item: Pokemon) {
    this.selectedPokemon = item;
  }

  // get list of pokemon for the page
  private fetchData() {
    this.apiService.getAllPokemon().subscribe((data: { pokemon: Array<Pokemon> }) => {
      this.pokemonArr = data.pokemon;
    }, (err) => {
      console.error('fetchData', err);
    });
  }
}
