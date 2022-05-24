import TransportFactory from "./TransportFactory";
import IVehicle from "./vehicles/interfaces/IVehicle";
import Motorcycle from "./vehicles/models/Motorcycle";

export default class MotorcycleTransport extends TransportFactory{
  protected createTransport(): IVehicle {
    return new Motorcycle();
  }
}