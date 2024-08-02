import Apurado from "../../src/trabajador/apurado";
import { EstadoTrabajador } from "../../src/types/estado-trabajador";
import * as MOCKS from "../mocks";

describe("Trabajador Apurado tests", () => {
  let instace: Apurado;

  beforeEach(() => {
    instace = new Apurado(1);
  });

  it("verifica que la instancia sea de tipo Apurado", () => {
    expect(instace).toBeInstanceOf(Apurado);
  });

  it("debe devolver el estado si el trabajador no se encuentra abordo", () => {
    expect(instace.getEstado()).toBe(EstadoTrabajador.A_PIE);
  });

  it("debe devolver el estado si el trabajador se encuentra abordo", () => {
    MOCKS.micro.getAsientosDisponibles = jest.fn().mockReturnValue(10);
    instace.ocuparLugar(MOCKS.micro);
    expect(instace.getEstado()).toBe(EstadoTrabajador.SENTADO);
  });

  it("debe devolver el estado si el trabajador se encuentra abordo y parado", () => {
    MOCKS.micro.getAsientosDisponibles = jest.fn().mockReturnValue(0);
    instace.ocuparLugar(MOCKS.micro);
    expect(instace.getEstado()).toBe(EstadoTrabajador.PARADO);
  });
});
