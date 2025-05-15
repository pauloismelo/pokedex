# Pokédex

This repository is a full-stack Pokédex application. It contains a server-side
REST API built using [NestJS](https://nestjs.com) and a client-side single-page
application built in [Angular](https://angular.dev). Developed by Paulo Melo at the request of the company jitterBit

## Features
✅ Pokémon List with Infinite Scroll (Load More button).

✅ Pokémon Search by Name.

✅ Pokémon Details Page.

✅ Clean Architecture with Angular (NgRx) and NestJS.

✅ Error Handling (Global HTTP Interceptor in Angular, Exception Filters in NestJS).

✅ Unit Tests with Jest (Frontend and Backend).

✅ Docker Support (Fully Containerized with Docker Compose).

## Pre-requisites
1. Node.JS v18+
2. Docker
3. Docker Compose

## Setup
1. Clone the repository: https://github.com/pauloismelo/pokedex
2. Install dependencies:
    ```shell
    cd pokedex
    cd api/
    npm install [Backend]
    cd ../app/
    npm install [Frontend]
    ```

## Run
In two separate shells, start the API and app:
```shell
cd api/
npm run start
```
```shell
cd app/
npm run start
```
Access the aplication or use this link to test in postman/thunderclient, etc...
1. Frontend: http://localhost:4200
2. Backend: http://localhost:3000



## For Docker
1. MAke sure Docker and Docker compose are installed and running
2. From the project root directory, run: docker-compose up --build

## For running tests
1. Frontend: 
    cd app/
    npm run test

2. Backend:
    cd api/
    npm run test