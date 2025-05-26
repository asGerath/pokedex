import { Component, OnInit } from '@angular/core';
import { CardPokemonComponent } from '../../components/card-pokemon/card-pokemon.component';
import { DetailsPokemonComponent } from '../../components/details-pokemon/details-pokemon.component';
import { PicturePokemonComponent } from '../../components/picture-pokemon/picture-pokemon.component';
import { PokemonService } from '../../services/pokemon.service';
import { Resultado } from '../../interfaces/pokeapi';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardPokemonComponent,
    DetailsPokemonComponent,
    PicturePokemonComponent,
    NgForOf,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  listaPokemon: Resultado[] = [];
  pagina: number = 1;
  isLoading = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList();
  }

  async pokemonList(): Promise<void> {
    if (this.isLoading) return;
    this.isLoading = true;

    const nuevos = await this.pokemonService.getBuyPage(this.pagina);
    this.listaPokemon = [...this.listaPokemon, ...nuevos];
    this.pagina++;

    this.isLoading = false;
  }

  onScroll(e: Event): void {
    const el = e.target as HTMLElement;

    if (Math.round(el.scrollTop + el.clientHeight) >= el.scrollHeight) {
      this.pokemonList();
    }
  }

  cardClickeada(id: string) {
    this.pokemonService.seleccionarPokemon(id); // ahora usamos el servicio
  }
}
