class Auto {
    //propiedades
    marca; modelo; hp; cantRuedas; #propietario

    constructor(marca, modelo, hp, dueno) {
        this.marca = marca; 
        this.modelo = modelo; 
        this.hp = hp; 
        this.#propietario = dueno;
        //propiedad definida por defecto
        this.cantRuedas = 4;
    }

    //getter
    obtenerdueno(){
        return this.#propietario
    }
   // setter
   cambiodueno(nuevoDueno) {
    this.#propietario = nuevoDueno
   }

    conducir(){
        return 'El auto esta andando'
    }

    {
        const auto1= new Auto('ford', 'focus', 60,'JJ')
    
    }
}

const auto1 = new Auto('Ford', 'Focus', 56, 'JJ'); 

console.log(auto1.obtenerdueno())
auto1.cambiarDueno('Valentina Contreras'); 
console.log(auto1.obtenerdueno())