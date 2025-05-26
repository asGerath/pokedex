import { Component, OnInit,  } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-picture-pokemon',
  standalone: true,
  imports:[NgIf],
  templateUrl: './picture-pokemon.component.html',
  styleUrls: ['./picture-pokemon.component.css'],
})
export class PicturePokemonComponent implements OnInit {
  pokemonId: string = '1';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.pokemonSeleccionado$.subscribe((id) => {
      this.pokemonId = id;
    });
  }
}
