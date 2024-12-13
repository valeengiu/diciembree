class Animal {
    raza; #vidas;

    constructor(tipoRaza, cantVidas){
        this.raza = tipoRaza; 
        this.#vidas = cantVidas; 

    }

    ontenerInfo() {
        return this.raza;
    }

    //getter y setter
    getVidas() {
        return this.#vidas;
    }

    //setter
    setVidas(numVidas){}
    this.#vidas = numVidas
}

class Mascota extends Animal {

    constructor(nombreMascota, tipoRaza) {
       
        this.nombre = nombreMascota;
        super(tipoRaza) //me ahorro codigo

    }

    ontenerInfo() {
        return this.raza, this.nombre; 
    }
}

const animal1 = new Animal (golden-retriever)
const mascota1 = Mascota('Marley', 'galgo')