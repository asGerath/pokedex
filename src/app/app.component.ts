import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { NgFor, NgIf } from '@angular/common';
import { Resultado } from './interfaces/pokeapi';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgFor, FormsModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  terminoBusqueda: string = '';
  sugerencias: Resultado[] = [];
  todosLosPokemones: string[] = [];
  pokemonNoEncontrado = false;


  constructor(private pokemonService: PokemonService) {}

  async ngOnInit() {
    const res = await this.pokemonService.getBuyPage(1, 1000);
    this.todosLosPokemones = res.map(p => p.name);
  }

  

  async buscarPokemon(termino: string) {
  this.terminoBusqueda = termino;
  this.pokemonNoEncontrado = false;

  if (!termino.trim()) {
    this.sugerencias = [];
    return;
  }

  try {
    const resultados = await this.pokemonService.buscarPorNombre(termino);
    this.sugerencias = resultados.slice(0, 8);
    this.pokemonNoEncontrado = resultados.length === 0;
  } catch (error) {
    console.error('Error buscando:', error);
    this.sugerencias = [];
    this.pokemonNoEncontrado = true;
  }
}



 async seleccionarPokemon(nombre: string) {
  this.terminoBusqueda = nombre; 
  this.sugerencias = [];
  try {
    const pokemon = await this.pokemonService.getById(nombre);
    const id = pokemon.id.toString();
    this.pokemonService.seleccionarPokemon(id);
    this.pokemonNoEncontrado = false;
this.terminoBusqueda = nombre;

  } catch (error) {
    console.error('No se pudo obtener el ID del Pokémon:', error);
  }
}


}
