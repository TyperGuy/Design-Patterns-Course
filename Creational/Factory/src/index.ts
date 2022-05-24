import BicycleTransport from './transports/BicycleTransport';
import CarTransport from './transports/CarTransport';
import MotorcycleTransport from './transports/MotorcycleTransport';
import Transport from './transports/TransportFactory';

declare var process;

var transport : Transport;

if(process.argv.includes('car')){
  transport = new CarTransport();
}else if(process.argv.includes('mot')){
  transport = new MotorcycleTransport();
}else if(process.argv.includes('bic')){
  transport = new BicycleTransport();
}else{
  console.error('Transporte indisponível no momento');
}

if(transport)
  transport.startTransport();