import Cl_mMobiliario from "./Cl_mMobiliario.js";
 
export default class Cl_mComedor extends Cl_mMobiliario {
    constructor(Factura, TipoMadera, Sillas) {
      super(Factura, TipoMadera);
      this.Sillas = Sillas;
    }
  
    PrecioComedor() {
      return this.PrecioBase() * 0.5 * this.Sillas * 0.1;
    }
  }