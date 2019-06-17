import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pokemon} from '../../core/models/pokemon_v2/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon: Pokemon;
  @Output() isSelected: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  constructor() {
  }

  public onSelectedItem() {
    this.isSelected.emit(this.pokemon);
  }

}
