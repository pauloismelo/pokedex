import { Controller, Get, Query, Param } from "@nestjs/common";
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) {}

    
    @Get()
    getPokemons(@Query('limit') limit: number, @Query('offset') offset: number) {
      console.log('limit', limit);
      return this.pokemonService.getPokemons(limit, offset);
    }
  
    @Get(':name')
    getPokemonDetails(@Param('name') name: string) {
      return this.pokemonService.getPokemonDetails(name);
    }
}
