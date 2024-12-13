class Libro {
    constructor (titulo, autor, paginas) {
        this.Titulo = Titulo; 
        this.Autor = Autor;
        this.Paginas = Paginas;
    
    }
    obtenerInformacion() {
        return (this.Titulo + 'tiene' +this.Autor + 'tiene' + this.Paginas + 'tiene'); 
    }
}
const Libro = new Libro('boulevard', 'FlorSalvador', '150'); 

console.log(Libro.obtenerInformacion())
