import Cl_mMuebleria from "./Cl_mMuebleria.js";
import Cl_vMuebleria from "./Cl_vMuebleria.js";
import Cl_vComedor from "./Cl_vComedor.js";
import Cl_vMueble from "./Cl_vMueble.js";
import Cl_mComedor from "./Cl_mComedor.js"
import Cl_mMueble from "./Cl_mMueble.js"
export default class Cl_Main {
  constructor() {
    this.app = {};
    this.app.mMuebleria = new Cl_mMuebleria(this.app);
    this.app.vComedor = new Cl_vComedor(this.app);
    this.app.vMueble = new Cl_vMueble(this.app);
    this.app.vMuebleria = new Cl_vMuebleria(this.app);

    console.log("Sisa");
  }
}
