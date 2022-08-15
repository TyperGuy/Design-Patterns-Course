import Engine from "../components/Engine";
import TransmissionType from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder{

  private vehicle = new Vehicle();
  reset(): void {
    this.vehicle = new Vehicle();
  }
  getVehicle(): Vehicle {
    const currentVehicle = this.vehicle;
    this.reset();
    return currentVehicle;
  }
  addWheel(wheel: Wheel) {
    this.vehicle.addWheel(wheel);
  }
  setVehicleType(type: VehicleType) {
   this.vehicle.vehicleType=type;
  }
  setSeats(seats: number) {
    this.vehicle.seats=seats;
  }
  setEngine(engine: Engine) {
    this.vehicle.engine=engine;
  }
  setTransmission(transmission: TransmissionType) {
    this.vehicle.transmission=transmission;
  }

}