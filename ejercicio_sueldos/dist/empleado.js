"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    sueldoNeto;
    bonoPresentismo;
    bonoResultado;
    ausencias;
    constructor() {
        this.sueldoNeto = 0;
        this.bonoPresentismo = 0;
        this.bonoResultado = 0;
        this.ausencias = 0;
    }
    getSueldoNeto() {
        return this.sueldoNeto;
    }
    getBonoPresentismo() {
        return this.bonoPresentismo;
    }
    getBonoResultado() {
        return this.bonoResultado;
    }
    getAusencias() {
        return this.ausencias;
    }
    setSueldoNeto(sueldoNeto) {
        this.sueldoNeto = sueldoNeto;
    }
    setBonoPresentismo() {
        switch (this.ausencias) {
            case 0:
                this.bonoPresentismo = 1000;
                break;
            case 1:
                this.bonoPresentismo = 450;
                break;
            default:
                this.bonoPresentismo = 0;
        }
    }
    setBonoResultado(pctObjetivo) {
        if (pctObjetivo === 1.0) {
            this.bonoResultado = this.sueldoNeto * 0.1;
        }
        else if (pctObjetivo >= 0.8 && pctObjetivo < 1.0) {
            this.bonoResultado = 800;
        }
        else {
            this.bonoResultado = 0;
        }
    }
    setAusencias(ausencias) {
        this.ausencias = ausencias;
    }
    calcularSueldo(ausencias, pctObjetivo) {
        if (pctObjetivo === undefined) {
            pctObjetivo = 0;
        }
        if (ausencias !== undefined) {
            this.setAusencias(ausencias);
        }
        this.setBonoPresentismo();
        this.setBonoResultado(pctObjetivo);
        return this.sueldoNeto + this.bonoPresentismo + this.bonoResultado;
    }
    toString() {
        return `Sueldo: $${this.sueldoNeto} \nAusencias: ${this.ausencias} \nBono por presentismo: $${this.bonoPresentismo} \nBono por resultado: $${this.bonoResultado}`;
    }
}
exports.default = Empleado;
//# sourceMappingURL=empleado.js.map