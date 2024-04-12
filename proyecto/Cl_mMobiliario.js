
export default class Cl_mMobiliario {
    constructor(Factura, TipoMadera) {
      this.Factura = Factura;
      this.TipoMadera = TipoMadera;
    }
  
    PrecioBase() {
      if (this.TipoMadera == 1) {
        return 5000;
      } else if (this.TipoMadera == 2) {
        return 3000;
      }
    }
  }