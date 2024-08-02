import Micro from "../src/micro/micro";
import Trabajador from "../src/trabajador/trabajador";

export const micro: Micro = {
  getAsientosDisponibles: jest.fn(),

  subirTrabajador: function (trabajador: Trabajador): void {
    throw new Error("Function not implemented.");
  },
  bajarTrabajador: function (trabajador: Trabajador): void {
    throw new Error("Function not implemented.");
  },
  getLugaresDisponibles: function (): number {
    throw new Error("Function not implemented.");
  },
  getParadosDisponibles: function (): number {
    throw new Error("Function not implemented.");
  },
  getPrimerPasajero: function (): Trabajador {
    throw new Error("Function not implemented.");
  },
};
