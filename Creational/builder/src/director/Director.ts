import IBuilder from '../builders/IBuilder';
import VehicleType from '../components/VehicleType';
import Transmission from '../components/Transmission';
import Engine from '../components/Engine';
import Wheel from '../components/Wheel';

export default class DirectorBuilder{
  constructor(private builder:IBuilder){
    
  }

  constructSedanCar(){
    this.builder.setVehicleType(VehicleType.SEDAN);
    this.builder.setSeats(5);
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.setEngine(new Engine(1600));
    for(let i:number = 3; i>=0 ; i-- )
      this.builder.addWheel(new Wheel(16));

  }

  constructTruck(){
    this.builder.setVehicleType(VehicleType.TRUCK);
    this.builder.setSeats(3);
    this.builder.setTransmission(Transmission.AUTOMATIC_SEQUENCIAL);
    this.builder.setEngine(new Engine(13000));
    for(var i:number = 5; i>=0 ; i-- )
      this.builder.addWheel(new Wheel(22));

  }
}