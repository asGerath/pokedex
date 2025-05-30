import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-picture-pokemon',
  standalone: true,
  imports: [NgIf, TitleCasePipe],
  templateUrl: './picture-pokemon.component.html',
  styleUrls: ['./picture-pokemon.component.css'],
})
export class PicturePokemonComponent implements OnInit {
  pokemonId: string = '1';
  isLoading: boolean = true;
  pokemon: any;

  nombre: string = '';
  numero: string = '';
  tipos: string = '';
  mostrarImagen = true;
  imgKey = 0;

  tiposTraducidos: Record<string, string> = {
  normal: 'Normal',
  fire: 'Fuego',
  water: 'Agua',
  grass: 'Planta',
  electric: 'Eléctrico',
  ice: 'Hielo',
  fighting: 'Lucha',
  poison: 'Veneno',
  ground: 'Tierra',
  flying: 'Volador',
  psychic: 'Psíquico',
  bug: 'Bicho',
  rock: 'Roca',
  ghost: 'Fantasma',
  dark: 'Siniestro',
  dragon: 'Dragón',
  steel: 'Acero',
  fairy: 'Hada'
  };
  tiposTraducidosArray: string[] = [];



  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
  this.pokemonService.pokemonSeleccionado$.subscribe((id) => {
  this.mostrarImagen = false; // Oculta el <img> temporalmente

  this.pokemonId = id;

  this.pokemonService.getById(id).then(pokemon => {
    this.pokemon = pokemon;
    this.tiposTraducidosArray = pokemon.types.map(t =>
      this.tiposTraducidos[t.type.name] || t.type.name
    );

    setTimeout(() => {
      this.imgKey++;
      this.mostrarImagen = true;
    }, 50);
  });
});


}

}
