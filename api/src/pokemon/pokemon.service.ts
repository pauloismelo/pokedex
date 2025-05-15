import { Injectable, UnauthorizedException } from "@nestjs/common";
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class PokemonService {
    private apiUrl = process.env.EXTERNAL_API || 'https://pokeapi.co/api/v2/pokemon';

    constructor(private httpService: HttpService) {}

    async getPokemons(limit: number, offset: number): Promise<any> {
        if (!limit) throw new UnauthorizedException('Limit is required for return a fixed number | first requirement');

        const response = await firstValueFrom(
        this.httpService.get(`${this.apiUrl}?limit=${limit}&offset=${offset}`)
        );
        return response.data;
    }

    async getPokemonDetails(name: string): Promise<any> {

        if (!name) throw new UnauthorizedException('Pokemon name is required because the third requirement');
        const response = await firstValueFrom(
        this.httpService.get(`${this.apiUrl}/${name}`)
        );
        return response.data;
    }
}
