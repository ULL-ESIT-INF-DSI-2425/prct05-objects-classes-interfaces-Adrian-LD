export interface Pokemon {
  name: string;
  weight: number;
  height: number;
  type: string;
  stats: {
    attack: number;
    defense: number;
    speed: number;
    hp: number;
  };
}



export class Pokedex {
  private pokemons: Pokemon[];

  constructor() {
    this.pokemons = [];
  }

  // Método para agregar un Pokémon a la Pokedex
  addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  // Método para mostrar información de todos los Pokémons
  showAllPokemons(): void {
    this.pokemons.forEach((pokemon) => {
      console.log(`Name: ${pokemon.name}`);
      console.log(`Type: ${pokemon.type}`);
      console.log(`Weight: ${pokemon.weight} kg`);
      console.log(`Height: ${pokemon.height} m`);
      console.log(`Stats: HP=${pokemon.stats.hp}, Attack=${pokemon.stats.attack}, Defense=${pokemon.stats.defense}, Speed=${pokemon.stats.speed}`);
      console.log("-------------------");
    });
  }

  // Método para buscar Pokémons por tipo
  searchByType(type: string): Pokemon[] {
    return this.pokemons.filter((pokemon) => pokemon.type === type);
  }

  // Método para buscar Pokémons por nombre
  searchByName(name: string): Pokemon[] {
    return this.pokemons.filter((pokemon) => pokemon.name === name);
  }
}


export class Combat {
  private pokemon1: Pokemon;
  private pokemon2: Pokemon;

  constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  private calculateEffectiveness(attackerType: string, defenderType: string): number {
    if (attackerType === defenderType) return 1; // Neutral
  
    const effectivenessMap: { [key: string]: { [key: string]: number } } = {
      fire: { grass: 2, water: 0.5, electric: 1 },
      water: { fire: 2, grass: 0.5, electric: 0.5 },
      grass: { fire: 0.5, water: 2, electric: 1 },
      electric: { fire: 1, water: 2, grass: 1 },
    };
  
    // Asegúrate de que ambos tipos estén en el mapa
    if (effectivenessMap[attackerType] && effectivenessMap[attackerType][defenderType]) {
      return effectivenessMap[attackerType][defenderType];
    }
  
    return 1; // Neutral si no se encuentra en el mapa
  }

  // Método para calcular el daño
  private calculateDamage(attacker: Pokemon, defender: Pokemon): number {
    const effectiveness = this.calculateEffectiveness(attacker.type, defender.type);
    const damage = 50 * (attacker.stats.attack / defender.stats.defense) * effectiveness;
    return Math.round(damage);
  }

  // Método para simular el combate
  start(): void {
    let attacker = this.pokemon1;
    let defender = this.pokemon2;

    console.log(`Combat starts: ${attacker.name} vs ${defender.name}`);

    while (attacker.stats.hp > 0 && defender.stats.hp > 0) {
      const damage = this.calculateDamage(attacker, defender);
      defender.stats.hp -= damage;

      console.log(`${attacker.name} attacks ${defender.name} for ${damage} damage!`);
      console.log(`${defender.name} HP: ${defender.stats.hp}`);

      // Intercambiar roles (el defensor ahora ataca)
      [attacker, defender] = [defender, attacker];
    }

    const winner = attacker.stats.hp > 0 ? attacker : defender;
    console.log(`The winner is: ${winner.name}!`);
  }
}


export const charizard: Pokemon = {
  name: "Charizard",
  weight: 90.5,
  height: 1.7,
  type: "fire",
  stats: {
    attack: 84,
    defense: 78,
    speed: 100,
    hp: 78,
  },
};

export const blastoise: Pokemon = {
  name: "Blastoise",
  weight: 85.5,
  height: 1.6,
  type: "water",
  stats: {
    attack: 83,
    defense: 100,
    speed: 78,
    hp: 79,
  },
};

export const venusaur: Pokemon = {
  name: "Venusaur",
  weight: 100.0,
  height: 2.0,
  type: "grass",
  stats: {
    attack: 82,
    defense: 83,
    speed: 80,
    hp: 80,
  },
};


