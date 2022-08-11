import Client from "./vehicles/client/IClient";
import { Companies } from "./vehicles/consts/Companies";
import ITransportFactory from './vehicles/factories/interface/ITransportFactory';
import NineNeneTransport from "./vehicles/factories/NineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";

const currentCompany : string = Companies.UBER;
let factory : ITransportFactory;

switch (currentCompany){
  case Companies.NINENINE : 
    factory = new NineNeneTransport(); 
    break
  case Companies.UBER:
    factory = new UberTransport();
    break
  default: 
    factory = new NineNeneTransport();
}

const client = new Client(factory);
client.startRoute();