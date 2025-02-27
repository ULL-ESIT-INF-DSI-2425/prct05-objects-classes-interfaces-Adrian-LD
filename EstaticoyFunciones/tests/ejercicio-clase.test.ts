import { describe, it, expect, beforeEach, vi } from "vitest"; 
import { Pokedex, Combat, Pokemon, charizard,} from "../src/ejercicio-clase";

describe("Alimento", () => {
  let fanta: Bebida;
  let Cocacola: Bebida;
  let alimento : Alimento;
  let caracteristicas: Caracteristicas;
  beforeEach(() => {
    alimento = new Alimento();

    fanta = {
      id: "Fanta",
      info: "Fanta, refresco con sabor a naranja",
      nutriscore: "C",
      precio: "1,25",
      },
    

  });

  it(, () => {
    pokedex.addPokemon(pikachu);
    expect(pokedex.searchByName("Pikachu")).toEqual([pikachu]);
  });

  it(, () => {

  });

  it(, () => {
  

    const electricPokemons = pokedex.searchByType("Electric");
    expect(electricPokemons).toEqual([pikachu]);
  });

  it(, () => {
    pokedex.addPokemon(pikachu);
    pokedex.addPokemon(bulbasaur);

    const foundPokemon = pokedex.searchByName("Bulbasaur");
    expect(foundPokemon).toEqual([bulbasaur]);
  });
});

describe("", () => {
 

  beforeEach(() => {
   
  });

  it(, () => {


  });

  it(, () => {
    

  });
});