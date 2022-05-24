import IVehicle from '../interfaces/IVehicle';

export default class Bicycle implements IVehicle{
  startRoute(): void {
    this.getCargo();
    console.log('Pegamos a carga com a bicicleta, indo entregar');

  }
  getCargo(): void {
    console.log('Pegando a carga');
  }
  
}