import IVehicle from "../interfaces/Ivehicle";

export default class Motorcycle implements IVehicle{
  startRoute(): void {
    this.getCargo();
    console.log('Começando a entrega ...');
  }
  getCargo(): void {
    console.log('Pegamos a encomenda, estamos prontos');
  }

}