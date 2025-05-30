import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Resultado } from '../../interfaces/pokeapi';
import { NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  standalone: true,
  imports: [NgIf, TitleCasePipe, NgClass],
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnChanges {

  constructor(private pokemonService: PokemonService) {}

  @Input() data?: Resultado;
  @Input() seleccionado:boolean = false;
  @Output() clickeado = new EventEmitter<string>();


  id: string = '';
  tipo: string = '';

  ngOnChanges(): void {
    this.obtenerNumero();
    this.obtenerTipo();
  }

  obtenerNumero() {
    if (this.data) {
      this.id = this.data.url.substring(34, this.data.url.length - 1);
    }
  }

  obtenerTipo() {
    if (this.id) {
      this.pokemonService.getById(this.id).then(pokemon => {
        this.tipo = pokemon.types[0]?.type?.name || '';
      });
    }
  }

  getClaseTipo(): string {
    return `bg-${this.tipo}`;
  }
}
