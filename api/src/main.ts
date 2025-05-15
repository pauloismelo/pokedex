import { NestFactory } from '@nestjs/core';
//import { PokedexApiModule } from './pokedex-api.module';
//Here I call the module directly
import {PokemonModule} from './pokemon/pokemon.module'

async function bootstrap() {
  const app = await NestFactory.create(PokemonModule);
  app.setGlobalPrefix('api');
  await app.listen(process.env.BACKEND_PORT || 3000);
}

bootstrap();
