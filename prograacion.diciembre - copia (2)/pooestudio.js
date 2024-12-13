class Jugador {
    constructor (nombre, edad, club, vidas) {
        this.nombre = nombre;
        this.edad = edad;
        this.club = club; 
        this.#vidas = vidas
    }

    ObtenerInformacion() {
        return (this.nombre + ' tiene ' + this.edad ' años y juega en ' + this.club);
    }


    //setter y getter 
    getVidas(){}
    this.#vidas =cantVidas
}

class Arbitro extends Jugador {
    constructor(nombre, edad, club) {
        this.tarjetas = tarjetas
        super(nombre, edad, club)
    }
    
}

const Jugador1 = new Jugador ('Lionel Messi', 37 , 'Inter Miami')
console.log (Jugador.ObtenerInformacion())
const arbitro1 = new Arbitro('pe')