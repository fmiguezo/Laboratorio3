"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const celular_1 = __importDefault(require("./celular"));
class MotorolaG5 extends celular_1.default {
    constructor() {
        super("Motorola G5");
    }
    realizarLlamado() {
        if (this.encendido && this.bateria > 0) {
            this.bateria -= 0.25;
        }
        else if (this.isEncendido() && this.getBateria() <= 0) {
            this.apagar();
        }
    }
}
exports.default = MotorolaG5;
//# sourceMappingURL=motorolaG5.js.map