import TransportFactory from "./TransportFactory";
import IVehicle from "./vehicles/interfaces/IVehicle";
import Car from "./vehicles/models/Car";

export default class CarTransport extends TransportFactory {
  protected createTransport(): IVehicle{
    return new Car();
  }
  
}