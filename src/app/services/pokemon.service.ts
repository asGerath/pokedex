import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';
import { Pokemon } from '../interfaces/pokemon';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonSeleccionadoSubject = new BehaviorSubject<string>('1');
  pokemonSeleccionado$ = this.pokemonSeleccionadoSubject.asObservable();

  private todosLosPokemones: Resultado[] = [];
  autocompleteResults$ = new BehaviorSubject<Resultado[]>([]);

  constructor() {
    this.cargarTodosLosPokemones();
  }

  async getBuyPage(page: number, size: number = 40): Promise<Resultado[]> {
    if (!page || page < 1) page = 1;
    const offset = size * (page - 1);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`);
    const resJson = await res.json();
    return resJson.results.length > 0 ? resJson.results : [];
  }

  async getById(id: string): Promise<Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await res.json();
  }

  seleccionarPokemon(id: string) {
    this.pokemonSeleccionadoSubject.next(id);
  }

  async cargarTodosLosPokemones() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const resJson = await res.json();
    this.todosLosPokemones = resJson.results;
  }

  async buscarPorNombre(termino: string): Promise<Resultado[]> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
  const data = await res.json();

  return data.results.filter((pokemon: Resultado) =>
    pokemon.name.toLowerCase().includes(termino.toLowerCase())
  );
}
  getDescripcion() {}
}
