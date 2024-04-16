"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Celular {
    modelo;
    encendido;
    bateria;
    constructor(modelo) {
        if (modelo === undefined) {
            this.modelo = "";
        }
        else {
            this.modelo = modelo;
        }
        this.encendido = false;
        this.bateria = 5.0;
    }
    encender() {
        this.encendido = true;
    }
    apagar() {
        this.encendido = false;
    }
    cargarBateria() {
        this.bateria = 5;
    }
    realizarLlamado() {
        if (this.encendido && this.bateria > 0) {
            this.bateria -= 0;
        }
        else if (this.encendido && this.bateria <= 0) {
            this.apagar();
        }
    }
    recibirLlamado() {
        if (this.encendido && this.bateria > 0) {
            this.bateria -= 0;
            console.log("Llamada establecida");
        }
        else if (!this.encendido || this.bateria <= 0) {
            this.apagar();
            console.log("El abonado no se encuentra disponible");
        }
    }
    getModelo() {
        return this.modelo;
    }
    isEncendido() {
        return this.encendido;
    }
    getBateria() {
        return this.bateria;
    }
    toString() {
        return `${this.modelo}: Bateria: ${this.bateria}`;
    }
}
exports.default = Celular;
//# sourceMappingURL=celular.js.map