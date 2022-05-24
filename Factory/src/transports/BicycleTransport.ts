import TransportFactory from "./TransportFactory";
import IVehicle from "./vehicles/interfaces/IVehicle";
import Bicycle from "./vehicles/models/Bicycle";

export default  class BicycleTransport extends TransportFactory {
  protected createTransport(): IVehicle {
    return new Bicycle();
  }
  
}