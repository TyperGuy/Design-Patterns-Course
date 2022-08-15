import Director from './director/Director';
import VehicleBuilder from './builders/VehicleBuilder';
import Vehicle from './products/Vehicle';

const vehicleBuilder = new VehicleBuilder();
const director = new Director(vehicleBuilder);

director.constructSedanCar();

const sedan : Vehicle = vehicleBuilder.getVehicle();
console.log( `Criando Veiculo do tipo ${sedan.vehicleType} 
com ${sedan.wheelsTotal} rodas` );

director.constructTruck();
const truck : Vehicle = vehicleBuilder.getVehicle();
console.log( `Criando Veiculo do tipo ${truck.vehicleType} 
com ${truck.wheelsTotal} rodas` );