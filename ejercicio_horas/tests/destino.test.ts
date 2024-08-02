import Destino from "../src/destino";

describe("Tests destinos", () => {
  let instance: Destino;

  beforeEach(() => {
    instance = new Destino("Madrid", 2);
  });

  it("instance should be an instanceof Destino", () => {
    expect(instance instanceof Destino).toBeTruthy();
  });

  it("should calculate local time for location", () => {
    let date = new Date();
    const result = instance.obtenerHoraLocal(date, -3);
    expect(result).toBe(date.setHours(date.getHours() + 5));
  });
});
