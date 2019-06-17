import {Component, Input} from '@angular/core';
import {Pokemon} from '../../core/models/pokemon_v2/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {

  @Input() pokemon: Pokemon;

  constructor() {
  }
}
