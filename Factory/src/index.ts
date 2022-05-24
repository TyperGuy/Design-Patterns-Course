import CarTransport from './transports/CarTransport';
import MotorcycleTransport from './transports/MotorcycleTransport';
import Transport from './transports/TransportFactory';

declare var process;

var transport : Transport;

if(process.argv.includes('tax')){
  transport = new CarTransport();
}else if(process.argv.includes('del')){
  transport = new MotorcycleTransport();
}else{
  console.error('Transporte indisponível no momento');
}

if(transport)
  transport.startTransport();