import { Routes } from '@angular/router';
import { PokedexComponent } from './features/pokedex/pokedex.component';
import { PokemonDetailComponent } from './features/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
    { path: '', component: PokedexComponent },
    { path: 'pokemon/:name', component: PokemonDetailComponent },
];
