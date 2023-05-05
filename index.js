// class Clase {
//     constructor(nombre = "atributosDeLaClase") {
//         this.nombre = nombre;
//     }
//     metodo() {
//         // hace algo
//     }
//     metodoConParametros(parametros) {
//         //hace algo con parametro
//     }
// }
// Crea 2 clases, una de Entrenador que va tener un nombre, este entrenador va mandar mensajes y órdenes a sus aves(cualquier aver que entienda sus mensajes)
// Las ordenes serán simple, conocer la energía del ave, alimentar al ave, ordenar que vuele algunas vueltas y hable, alimentar le sumará 2 puntos de energía, volar le quitará 2 puntos de energía, y hablar 1
// la clase Ave tiene un nombre, tipo de ave y puntos de energía, cuenta si tiene hambre o no(de acuerdo a sus puntos de energía; estos puntos no pueden ser menor a 0 de ninguna forma), puede alimentarse(el máximo límite de energía lo estableces vos), volar y hablar.
// La clase se crea así:
class Entrenador {
    constructor(nombre){
        this.nombre=nombre
    }
    tieneHambre(pajaro){
        pajaro.PE>20
            ?console.log("Ta gordito tu pajaro")
            :console.log("Ta flaco tu pajaro");
    }
    alimentar(pajaro){
        console.log("*sonidos de pajaro comiendo*")
        pajaro.PE+=2
        console.log("Ave alimentada!")
    }
    ordenVolar(pajaro){
        pajaro.volar()
        
    }
    ordenHablar(pajaro){
        pajaro.hablar();
    }
}
class Ave{
    constructor(nombre,tipo,PE){
        this.nombre=nombre;
        this.tipo=tipo;
        this.PE=PE;
    }
    tieneHambre(){
        if(this.PE<20)
            console.log("Ta flaco tu pajaro");
        }
    volar(){
        this.PE>2
            ?this.PE-=2
            :console.log("Esta muy cansado para volar");
            this.tieneHambre();
        }
    hablar(){      
        if (this.PE>1){
            this.PE--
            console.log("¡¡¡Que onda mi negro!!!")
        } else {
            console.log("Esta muy cansado para hablar");
        }
    }
}
// -----------------------------------------------------------
// //Intancias la clase 
// const llamadoClase = new Clase("nombre");
// //uso un metodo
// llamadoClase.metodo();
// //uso un metodo con parametro
// llamadoClase.metodo("Parametro 1", "Parametro 2");
// // verifico la propiedad del objeto
// llamadoClase.nombre;
// -----------------------------------------------------------
const ronaldo = new Entrenador("Ronaldo")

const pepita =new Ave("Pepita","pichon",30)

const alan =new Ave("Alan","piton",15)

ronaldo.ordenVolar(alan)
