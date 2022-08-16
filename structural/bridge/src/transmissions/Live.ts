import ITransmission from "./ITransmission";
import IPlatform from '../platforms/IPlatform';

export default class Live  implements ITransmission {

  constructor(private platform : IPlatform) {

  }
  broadcasting(): void {
    console.log("Iniciando a transmissão")
  }
  result(): void {
    console.log(" ******* ON AIR ********")
  }

}