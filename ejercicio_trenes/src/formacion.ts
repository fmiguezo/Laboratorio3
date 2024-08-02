import { EstadoFormacion } from "./estado-formacion";
import Locomotora from "./locomotora";
import Vagon from "./vagon/vagon";

export default class Formacion {
  private vagones: Vagon[];
  private locomotoras: Locomotora[];
  private estado: EstadoFormacion;

  constructor();
  constructor(vagones?: Vagon[]) {
    this.vagones = vagones || new Array<Vagon>();
    this.locomotoras = new Array<Locomotora>();
    this.estado = EstadoFormacion.EN_DEPOSITO;
  }

  public getLocomotoras(): Locomotora[] {
    return this.locomotoras;
  }

  public getVagones(): Vagon[] {
    return this.vagones;
  }

  public getEstado(): EstadoFormacion {
    return this.estado;
  }

  public agregarVagon(vagon: Vagon): void {
    this.estaEnMarcha();
    this.vagones.push(vagon);
  }

  public obtenerKilosDeEmpuje(): number {
    let kilosDeEmpuje = 0;
    for (let locomotora of this.locomotoras) {
      kilosDeEmpuje += locomotora.obtenerPesoMaximo();
    }
    return kilosDeEmpuje;
  }

  public estaEnMarcha(): boolean {
    return this.estado === EstadoFormacion.EN_MARCHA;
  }

  public calcularPesoMaximoPasajeros(): number {
    /*
    let pesoMaximoPasajeros = 0;
    for (let vagon of this.vagones) {
      pesoMaximoPasajeros += vagon.calcularPesoMaximo();
    }
    return pesoMaximoPasajeros;
    */
    /*
    const pesoMaximoPasajeros = Array.from(this.vagones).reduce(
      (acumulador, vagon) => acumulador + vagon.calcularPesoMaximo(),
      0
    );
    return pesoMaximoPasajeros;
    */
    const pasajeros = this.vagones.map((vagon) => vagon.calcularPesoMaximo());
    return pasajeros.reduce((acumulador, peso) => acumulador + peso, 0);
  }

  public obtenerTotalVagonesLivianos(): number {
    /*
    let totalVagonesLivianos = 0;
    for (let vagon of this.vagones) {
      if (vagon.calcularPesoMaximo() < 2500) {
        totalVagonesLivianos++;
      }
    }
    return totalVagonesLivianos;
    */
    const vagonesLivianos = this.vagones.filter((vagon) => vagon.calcularPesoMaximo() < 2500);
    return vagonesLivianos.length;
  }

  public obtenerVelocidadMaxima(): number {
    /*
    if (this.locomotoras.size === 0) {
      return 0;
    } else {
      let velocidadMaxima = this.locomotoras.entries().next().value[0].obtenerVelocidadMaxima();
      for (let locomotora of this.locomotoras) {
        if (locomotora.obtenerVelocidadMaxima() < velocidadMaxima) {
          velocidadMaxima = locomotora.obtenerVelocidadMaxima();
        }
      }
      return velocidadMaxima;
    }
  }
  */
    const velocidades = this.locomotoras.map((locomotora) => locomotora.obtenerVelocidadMaxima());
    //return velocidades.reduce((acumulador, velocidad) => Math.min(acumulador, velocidad), 0);
    return Math.min(...velocidades);
  }

  public esEficiente(): boolean {
    /*
    if (this.locomotoras.size === 0) {
      return false;
    } else {
      for (let locomotora of this.locomotoras) {
        if (locomotora.calcularArrastreUtil() < this.obtenerKilosDeEmpuje() * 5) {
          return false;
        }
      }
    }
    return true;
    */
    return this.locomotoras.every((locomotora) => locomotora.calcularArrastreUtil() >= this.obtenerKilosDeEmpuje() * 5);
  }

  public calcularArrastreUtil(): number {
    /*
    let arrastreUtil = 0;
    for (let locomotora of this.locomotoras) {
      arrastreUtil += locomotora.calcularArrastreUtil();
    }
    return arrastreUtil;
    */

    /*
    return Array.from(this.locomotoras).reduce(
      (acumulador, locomotora) => acumulador + locomotora.calcularArrastreUtil(),
      0
    );*/
    const arrastresUtiles = this.locomotoras.map((locomotora) => locomotora.calcularArrastreUtil());
    return arrastresUtiles.reduce((acumulador, arrastre) => acumulador + arrastre, 0);
  }

  public puedeMoverse(): boolean {
    return this.calcularArrastreUtil() >= this.obtenerKilosDeEmpuje();
  }

  public calcularEmpujeFaltante(): number {
    return this.obtenerKilosDeEmpuje() - this.calcularArrastreUtil();
  }

  public calcularPesoTotal(): number {
    /*
    let pesoTotal = 0;
    for (let vagon of this.vagones) {
      pesoTotal += vagon.calcularPesoMaximo();
    }
    for (let locomotora of this.locomotoras) {
      pesoTotal += locomotora.obtenerPeso();
    }
    return pesoTotal;
    */
    const pesosVagones = this.vagones.map((vagon) => vagon.calcularPesoMaximo());
    const pesosLocomotoras = this.locomotoras.map((locomotora) => locomotora.obtenerPeso());
    return (
      pesosVagones.reduce((acumulador, peso) => acumulador + peso, 0) +
      pesosLocomotoras.reduce((acumulador, peso) => acumulador + peso, 0)
    );
  }

  public esCompleja(): boolean {
    return this.locomotoras.length + this.vagones.length > 20 || this.calcularPesoTotal() > 10000;
  }
}
