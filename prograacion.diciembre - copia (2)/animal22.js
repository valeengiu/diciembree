// Clase base (Abstraccion)
class Animal {
    #nombre; // Propiedad privada
    #sonido; // Propiedad privada

    constructor(nombre, sonido) {
        this.#nombre = nombre;
        this.#sonido = sonido;
    }

    // MÃ©todos para acceder a propiedades privadas (Encapsulamiento)
    getNombre() {
        return this.#nombre;
    }

    hacerSonido() {
        return `${this.#nombre} hace: ${this.#sonido}`;
    }
}

// Clase derivada (Herencia)
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre, "guau"); // Llamada al constructor de la clase base
        this.raza = raza; // Propiedad especÃ­fica de la clase Perro
    }

    // Sobrescritura de metodo (Polimorfismo)
    hacerSonido() {
        return `${this.getNombre()} de raza ${this.raza} dice: guau`;
    }
}

// Clase derivada (Herencia)
class Gato extends Animal {
    constructor(nombre, color) {
        super(nombre, "miau"); // Llamada al constructor de la clase base
        this.color = color; // Propiedad especÃ­fica de la clase Gato
    }

    // Sobrescritura de metodo (Polimorfismo)
    hacerSonido() {
        return `${this.getNombre()}, un gato ${this.color}, hace: miau`;
    }
}

// Uso del codigo
const perro = new Perro("Rex", "Labrador");
console.log(perro.hacerSonido()); // Rex de raza Labrador dice: guau

const gato = new Gato("Luna", "blanco");
console.log(gato.hacerSonido()); // Luna, un gato blanco, hace: miau

const animal = new Animal("pajaro", "piu");
console.log(animal.hacerSonido()); // pajaro hace: piu