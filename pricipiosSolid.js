// Principio de substitución de Liskov
/**
 * Abstract Class Coche.
 *
 * @class Coche
 */
class Coche {
  constructor(asientos) {
    this.asientos = asientos;
  }
}

/**
 * Renault.
 *
 * @class Renault
 * @extends {Coche}
 */
class Renault extends Coche {
  constructor(asientos) {
    super(asientos);
  }
  numAsientos() {
    return this.asientos;
  }
}

/**
 * Audi.
 *
 * @class Audi
 * @extends {Coche}
 */
class Audi extends Coche {
  constructor(asientos) {
    super(asientos);
  }
  numAsientos() {
    return this.asientos;
  }
}

/**
 * Ford.
 *
 * @class Ford
 * @extends {Coche}
 */
class Ford extends Coche {
  constructor(numAsientos) {
    super(numAsientos);
  }
  numAsientos() {
    return this.asientos;
  }
}

/**
 * Mercedez.
 *
 * @class Mercedez
 * @extends {Coche}
 */
class Mercedez extends Coche {
  constructor(numAsientos) {
    super(numAsientos);
  }
  numAsientos() {
    return this.asientos;
  }
}

function imprimirNumAsientos(arrayCoches) {
  for (const coche of arrayCoches) {
    console.log(coche.numAsientos());
  }
}

const renault = new Renault(5);
const audi = new Audi(2);
const ford = new Ford(4);
const mercedez = new Mercedez(5);

imprimirNumAsientos([renault, audi, ford, mercedez]);
