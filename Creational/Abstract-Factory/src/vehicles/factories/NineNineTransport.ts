import IAircraft from "../aerial/interfaces/IAircraft";
import IAirplane from "../aerial/IAirplane";
import IMotorcycle from "../land/IMotorcycle";
import ILandVehicle from "../land/interface/ILandVehicle";
import ITransportFactory from "./interface/ITransportFactory";

export default class NineNeneTransport implements ITransportFactory{
  createTransportVehicle(): ILandVehicle {
    return new IMotorcycle;
  }
  createTransportAircraft(): IAircraft {
    return new IAirplane;
  }

} 