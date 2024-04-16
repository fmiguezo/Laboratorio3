"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const celular_1 = __importDefault(require("./celular"));
class Persona {
    nombre;
    celular;
    constructor(nombre, celular) {
        this.nombre = nombre;
        if (celular === undefined) {
            this.celular = new celular_1.default();
        }
        else {
            this.celular = celular;
        }
    }
    getNombre() {
        return this.nombre;
    }
    getCelular() {
        return this.celular;
    }
    setCelular(celular) {
        this.celular = celular;
    }
    llamar(receptor) {
        if (this.celular.isEncendido()) {
            this.celular.realizarLlamado();
            console.log(`Estableciendo llamada con ${receptor.getNombre()}.`);
            receptor.getCelular().recibirLlamado();
        }
        else {
            console.log("No se puede realizar la llamada.");
        }
    }
    finalizarLlamada(receptor) {
        console.log(`Finalizando llamada con ${receptor.getNombre()}.`);
        console.log(`Nivel de batería actual es de ${this.celular.getBateria()} puntos.`);
        if (receptor.getCelular().isEncendido()) {
            console.log(`El celular de ${receptor.getNombre()} sigue encendido.`);
        }
        else {
            console.log(`El celular de ${receptor.getNombre()} está apagado.`);
        }
        this.celular.cargarBateria();
    }
    toString() {
        return `Nombre: ${this.nombre} \nCelular: ${this.celular.getModelo()}`;
    }
}
exports.default = Persona;
//# sourceMappingURL=persona.js.map