import * as MOCKS from "./mock";

describe("Empleado", () => {
  let instance: Empleado;

  describe("Pruebas sobre getSueldo", () => {
    beforeEach(() => {
      instance = new Empleado();
    });

    afterEach(() => {});

    it("devuelve sueldo neto", () => {
      instance.calculadorSueldo = MOCKS.calculadorSueldoBasicoMock;

      const sueldo = instance.getSueldo();
      expect(sueldo).toBe(2000);
    });

    it("Debe devolver 0 si el sueldo es 0", () => {
      instance = new Empleado(0);
      expect(instance.getSueldo()).toBe(0);
    });

    it("Debe devolver 1000 si el sueldo es 1000", () => {
      instance = new Empleado(1000);
      expect(instance.getSueldo()).toBe(1000);
    });

    it("Debe devolver 0 si el sueldo es -1000", () => {
      instance = new Empleado(-1000);
      expect(instance.getSueldo()).toBe(0);
    });
  });
});
