import IAircraft from "./interfaces/IAircraft";

export default class IAirplane implements IAircraft{
  startRoute(): void {
    this.checkWindow();
    this.getCargo();
    console.log("We are Starting the Route")
  }
  getCargo(): void {
    console.log("Getting Cargo");
  }
  checkWindow(): void {
    console.log("Checking the Wind condition");
    console.log("Winds Coming 25 KM from the West");
  }
}