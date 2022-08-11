import IAircraft from "../aerial/interfaces/IAircraft";
import IAirplane from "../aerial/IAirplane";
import ILandVehicle from "../land/interface/ILandVehicle";
import ITransportFactory from "./interface/ITransportFactory";
import IRollerblades from "../land/IRollerblades";
import IDrone from "../aerial/IDrone";

export default class NineNeneTransport implements ITransportFactory{
  createTransportVehicle(): ILandVehicle {
    return new IRollerblades;
  }
  createTransportAircraft(): IAircraft {
    return new IDrone;
  }

} 