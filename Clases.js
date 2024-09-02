// clasica
class Curso {
    
    #titulo="los mejores"
    nombre;

    constructor() {
        this.nombre="Sexto";
        this.estudiantes=24;
    }

    MostrarTitulo(){
        return this.#titulo;
    }

    get nombre(){
        return this.nombre;
    }

    set nombre(nombre) {
        this.nombre=nombre;
    }
}

let Cursos = class{
    
}

