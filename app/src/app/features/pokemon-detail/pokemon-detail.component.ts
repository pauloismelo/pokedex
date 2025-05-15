import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../core/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) this.loadPokemonDetails(name);
  }

  loadPokemonDetails(name: string) {
    this.pokemonService.getPokemonDetails(name).subscribe((data) => {
      this.pokemon = data;
    });
  }

  goBack() {
    window.history.back();
  }
}
