import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemons: any[] = [];
  limit = 10;
  offset = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getPokemons(this.limit, this.offset).subscribe((data) => {
      console.log(data);
      this.pokemons = [...this.pokemons, ...data.results];
      this.offset += this.limit;
    });
  }
}
