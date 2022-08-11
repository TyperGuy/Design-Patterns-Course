import Client from "./vehicles/client/IClient";
import { Companies } from "./vehicles/consts/Companies";
import ITransportFactory from './vehicles/factories/interface/ITransportFactory';
import NineNeneTransport from "./vehicles/factories/NineNineTransport";
import LeimeTransport from "./vehicles/factories/LeimeTransport";
import UberTransport from "./vehicles/factories/UberTransport";

const currentCompany : string = Companies.LEIME;
let factory : ITransportFactory;

switch (currentCompany){
  case Companies.NINENINE : 
    factory = new NineNeneTransport(); 
    break
  case Companies.UBER:
    factory = new UberTransport();
    break
  case Companies.LEIME:
    factory = new LeimeTransport();
    break  
  default: 
    factory = new NineNeneTransport();
}

const client = new Client(factory);
client.startRoute();