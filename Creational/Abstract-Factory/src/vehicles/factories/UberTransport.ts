import IAircraft from "../aerial/interfaces/IAircraft";
import IAirplane from "../aerial/IAirplane";
import IMotorcycle from "../land/IMotorcycle";
import ILandVehicle from "../land/interface/ILandVehicle";
import ITransportFactory from "./interface/ITransportFactory";
import ICar from "../land/ICar";

export default class UberTransport implements ITransportFactory{
  createTransportVehicle(): ILandVehicle {
    return new ICar;
  }
  createTransportAircraft(): IAircraft {
    return new IAirplane;
  }

} 