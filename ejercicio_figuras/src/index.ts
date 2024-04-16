import Cuadrado from "./figuras/cuadrado";
import Circulo from "./figuras/circulo";
import Triangulo from "./figuras/triangulo";

/*
import Operations from "./operations";
import Persona from "./persona";

const op: Operations = new Operations();

const resultado = op.sum(1, 3);
console.log("Resultado: " + resultado);
console.info("Resultado: ", resultado);
console.log(`Resultado: ${resultado}`);

const p: Persona = new Persona("yyy");
const p1: Persona = new Persona();
const p2: Persona = new Persona("zzz", 20);
p.edad = 18;
p.nombre = "xxxx";

console.log(`Persona: ${p.nombre} tiene ${p.edad} anios`);

const greeting: string = "Hello, TypeScript!";
console.log(greeting);

/*
var x1; // alcance global
let x2; // alcance del bloque donde esté definida
const x3 = 3; // alcance del bloque donde esté definida

// Tipos de datos
let algo: string = "hola mundo";
algo = "chau mundo";
// algo = 2; // Error
*/

const cuadrado = new Cuadrado();
cuadrado.color = "azul";
cuadrado.nombre = "Azul";
cuadrado.lado = 3;

console.log(
  `El cuadrado: ${cuadrado.nombre} tiene un color: ${cuadrado.color} y un lado de: ${
    cuadrado.lado
  }. El perimetro es: ${cuadrado.getPerimetro()}, y el area es: ${cuadrado.getArea()}`
);

const circulo = new Circulo();
circulo.color = "rojo";
circulo.nombre = "Rojo";
circulo.radio = 3;

console.log(
  `El circulo: ${circulo.nombre} tiene un color: ${circulo.color} y un radio de: ${
    circulo.radio
  }. El perimetro es: ${circulo.getPerimetro()}, y el area es: ${circulo.getArea()}`
);

const triangulo = new Triangulo();
triangulo.color = "verde";
triangulo.nombre = "Verde";
triangulo.base = 3;

console.log(
  `El triangulo: ${triangulo.nombre} tiene un color: ${triangulo.color} y una base de: ${
    triangulo.base
  }. El perimetro es: ${triangulo.getPerimetro()}, y el area es: ${triangulo.getArea()}`
);
