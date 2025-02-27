interface Caracteristicas {
  id: string;
  info: string;
  nutriscore: string;
  precio: string;
} 


abstract class Productos {


  constructor( private caracteristicas: Caracteristicas) {
  }

  abstract showInfo(caracteristicas:Caracteristicas):string;

  getCaracteristicas(): Caracteristicas {
    return this.caracteristicas;
  }

  setCaracteristicas(caracteristicas: Caracteristicas):void {
    this.caracteristicas = caracteristicas;
  }
}



class Alimento extends Productos {

  constructor(caracteristicas: Caracteristicas,gramo: number, gluten: boolean) {
    super(caracteristicas);
    this.gramos = gramo;
    this.gluten = gluten;
  }

  getGramo(): number {
    return this.gramos;
  }
  getGluten(): boolean {
    return this.gluten;
  }
  setGramo(gramo: number):void {
    this.gramos = gramo;
  }
  setGluten(gluten:boolean):void {
    this.gluten = gluten;
  }

  showInfo(caracteristicas: Caracteristicas) {
    caracteristicas = this.getCaracteristicas();
    let salida = `ID: ${caracteristicas.id}, Info: ${caracteristicas.info}, Nutriscore: ${caracteristicas.nutriscore}, Precio: ${caracteristicas.precio}, Gramos: ${this.gramos}, Gluten: ${this.gluten}`;
    return salida;
  }

  private gramos:number;
  private gluten: boolean;
}


class Bebida extends Productos {

  constructor(caracteristicas: Caracteristicas,ml: number, gas: boolean) {
    super(caracteristicas);
    this.ml = ml;
    this.gas = gas;
  }


  getMl(): number {
    return this.ml;
  }

  getGas(): boolean {
    return this.gas;
  }

  setMl(ml:number): void {
    this.ml = ml;
  }

  setGas(gas:boolean): void {
    this.gas = gas;
  }

  showInfo(caracteristicas: Caracteristicas): string {
    caracteristicas = this.getCaracteristicas();
    let salida = `ID: ${caracteristicas.id}, Info: ${caracteristicas.info}, 
    Nutriscore: ${caracteristicas.nutriscore}, Precio: ${caracteristicas.precio}, Ml: ${this.ml}, Gas: ${this.gas}`;
    return salida;
  }

  private ml:number;
  private gas: boolean;
}


 const Cocacola: Caracteristicas = {
  id: "Cocacola",
  info: "Cocacola-Original, ultimo modelo",
  nutriscore: "C",
  precio: "1,50",
};

const CocacolaBebida = new Bebida(Cocacola, 500, true);
console.log(CocacolaBebida.showInfo(Cocacola));

const Fanta: Caracteristicas = {
  id: "Fanta",
  info: "Fanta, refresco con sabor a naranja",
  nutriscore: "C",
  precio: "1,25",
};

const FantaBebida = new Bebida(Fanta, 250, true);
console.log(CocacolaBebida.showInfo(Cocacola));

const Pizza: Caracteristicas = {
  id: "Pizza",
  info: "Pizza de 4 quesos",
  nutriscore: "B",
  precio: "7,5",
};

const PizzaAlimento = new Alimento(Pizza, 450, false);
console.log(CocacolaBebida.showInfo(Cocacola));



