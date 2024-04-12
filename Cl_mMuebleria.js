import Cl_mComedor from "./Cl_mComedor.js";
import Cl_mMueble from "./Cl_mMueble.js";

export default class Cl_mMuebleria {
  constructor() {
    this.ContComedor = 0;
    this.ContMobiliario = 0;
    this.AcumTotalComedor = 0;
    this.AcumTotalMueble = 0;
    this.AcumTotal = 0;
  }

  procesar(Mobiliario) {
    if (Mobiliario instanceof Cl_mComedor) {
      this.ContComedor++;
      this.AcumTotalComedor += Mobiliario.PrecioComedor();
    } else if (Mobiliario instanceof Cl_mMueble) {
      this.ContMobiliario++;
      this.AcumTotalMueble += Mobiliario.PrecioMueble();
    }
  }

  ProductoMasVendido() {
    if (this.ContComedor > this.ContMobiliario) {
      return "Comedores";
    } else if (this.ContComedor < this.ContMobiliario) {
      return "Muebles";
    } else return "Por igual";
  }

  PorcComedores() {
    return Math.round(
      (this.ContComedor / (this.ContComedor + this.ContMobiliario)) * 100
    );
  }

  MontoTotal() {
    return (this.AcumTotal = this.AcumTotalComedor + this.AcumTotalMueble);
  }
}
