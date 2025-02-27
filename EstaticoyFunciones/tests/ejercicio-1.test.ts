import { describe, it, expect, beforeEach, vi } from "vitest";
import {  } from "../src/ejercicio-1";

describe("Pokedex", () => {
  let pokedex: Pokedex;
  let pikachu: Pokemon;
  let bulbasaur: Pokemon;

  beforeEach(() => {
    pokedex = new Pokedex();

    pikachu = {
      name: "Pikachu",
      weight: 6.0,
      height: 0.4,
      type: "Electric",
      stats: {
        attack: 55,
        defense: 40,
        speed: 90,
        hp: 35,
      },
    };

    bulbasaur = {
      name: "Bulbasaur",
      weight: 6.9,
      height: 0.7,
      type: "Grass",
      stats: {
        attack: 49,
        defense: 49,
        speed: 45,
        hp: 45,
      },
    };
  });

  it("should add a Pokémon to the Pokedex", () => {
    pokedex.addPokemon(pikachu);
    expect(pokedex.searchByName("Pikachu")).toEqual([pikachu]);
  });

  it("should show all Pokémons in the Pokedex", () => {
    pokedex.addPokemon(pikachu);
    pokedex.addPokemon(bulbasaur);


    const consoleSpy = vi.spyOn(console, "log"); 
    pokedex.showAllPokemons();

    expect(consoleSpy).toHaveBeenCalledWith("Name: Pikachu");
    expect(consoleSpy).toHaveBeenCalledWith("Type: Electric");
    expect(consoleSpy).toHaveBeenCalledWith("Weight: 6 kg");
    expect(consoleSpy).toHaveBeenCalledWith("Height: 0.4 m");
    expect(consoleSpy).toHaveBeenCalledWith("Stats: HP=35, Attack=55, Defense=40, Speed=90");
    expect(consoleSpy).toHaveBeenCalledWith("-------------------");
  });

  it("should search Pokémons by type", () => {
    pokedex.addPokemon(pikachu);
    pokedex.addPokemon(bulbasaur);

    const electricPokemons = pokedex.searchByType("Electric");
    expect(electricPokemons).toEqual([pikachu]);
  });

  it("should search Pokémons by name", () => {
    pokedex.addPokemon(pikachu);
    pokedex.addPokemon(bulbasaur);

    const foundPokemon = pokedex.searchByName("Bulbasaur");
    expect(foundPokemon).toEqual([bulbasaur]);
  });
});

describe("Combat", () => {
  let pikachu: Pokemon;
  let bulbasaur: Pokemon;

  beforeEach(() => {
    pikachu = {
      name: "Pikachu",
      weight: 6.0,
      height: 0.4,
      type: "Electric",
      stats: {
        attack: 55,
        defense: 40,
        speed: 90,
        hp: 35,
      },
    };

    bulbasaur = {
      name: "Bulbasaur",
      weight: 6.9,
      height: 0.7,
      type: "Grass",
      stats: {
        attack: 49,
        defense: 49,
        speed: 45,
        hp: 45,
      },
    };
  });

  it("should simulate a combat between two Pokémons", () => {
    const combat = new Combat(pikachu, bulbasaur);

  
    const consoleSpy = vi.spyOn(console, "log");
    combat.start();

   
    expect(consoleSpy).toHaveBeenCalledWith("Combat starts: Pikachu vs Bulbasaur");
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("attacks"));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("HP:"));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("The winner is:"));
  });

  it("should calculate damage correctly", () => {
    const combat = new Combat(pikachu, bulbasaur);

    
    const effectiveness = 2; 
    const damage = 50 * (pikachu.stats.attack / bulbasaur.stats.defense) * effectiveness;

    
    expect(combat.calculateDamage(pikachu, bulbasaur)).toBe(Math.round(damage));
  });
});