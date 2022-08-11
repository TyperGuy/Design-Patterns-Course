import ILandVehicle from "./interface/ILandVehicle";

export default class ICar implements ILandVehicle{
  startRoute(): void {
    this.getCargo();
    console.log("Starting Route");
  }
  getCargo(): void {
    console.log("We got the passengers, now we are ready to go");
  }

}