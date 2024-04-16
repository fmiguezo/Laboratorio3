"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const celular_1 = __importDefault(require("./celular"));
class iPhone extends celular_1.default {
    constructor() {
        super("iPhone");
    }
    realizarLlamado() {
        if (this.encendido && this.bateria > 0) {
            this.bateria -= this.bateria * 0.01;
        }
        else if (this.encendido && this.bateria <= 0) {
            this.apagar();
        }
    }
}
exports.default = iPhone;
//# sourceMappingURL=iphone.js.map