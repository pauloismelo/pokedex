import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { routes } from './pokedex-app.routes';
import { PokedexAppComponent } from "./pokedex-app.component";
import { PokemonService } from "./core/services/pokemon.service";
import { PokedexComponent } from './features/pokedex/pokedex.component';
import { PokemonDetailComponent } from './features/pokemon-detail/pokemon-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    PokemonService,
  ],
  declarations: [
    PokedexAppComponent,
    PokedexComponent,
    PokemonDetailComponent
  ],
  bootstrap: [PokedexAppComponent],
})
export class PokedexAppModule {}
