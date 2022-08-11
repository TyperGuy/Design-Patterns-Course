import ILandVehicle from "./interface/ILandVehicle";

export default class IMotocycle implements ILandVehicle{
  startRoute(): void {
    this.getCargo();
    console.log("Starting the delivery");
  }
  getCargo(): void {
    console.log("We got the cargo, now we are ready to go");
  }

}