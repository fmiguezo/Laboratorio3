import VagonDeCarga from "../../src/vagon/vagon-carga";

describe("Test de vagon de carga", () => {
  let instance: VagonDeCarga;
  beforeEach(() => {
    instance = new VagonDeCarga(500);
  });

  it("Verifica que la instancia sea del tipo Vagon de Carga", () => {
    expect(instance).toBeInstanceOf(VagonDeCarga);
  });

  it("Verifica que la cantidad de pasajeros sea 0 (cero)", () => {
    expect(instance.calcularMaximoPasajeros()).toBe(0);
  });

  it("Verifica que el peso máximo de un vagon de carga sea la carga máxima más el peso de dos guardas (160)", () => {
    expect(instance.calcularPesoMaximo()).toBe(500 + 160);
  });
});
