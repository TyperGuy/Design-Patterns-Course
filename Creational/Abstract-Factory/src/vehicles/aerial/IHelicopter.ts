import IAircraft from "./interfaces/IAircraft";

export default class IHelicopter implements IAircraft{
  startRoute(): void {
    this.checkWindow();
    this.getCargo();
    console.log("We are Starting the Route")
  }
  getCargo(): void {
    console.log("Getting Cargo");
  }
  checkWindow(): void {
    console.log("Winds Coming 25 KM from the East");
  }
  
}