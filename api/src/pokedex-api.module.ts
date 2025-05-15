//It's a legacy file because I call the module directly in main.ts

import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [PokemonModule],
})
export class PokedexApiModule {}
