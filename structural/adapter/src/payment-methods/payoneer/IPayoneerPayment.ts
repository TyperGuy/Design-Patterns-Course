import Token from "../../utils/Token";


export default interface IPayoneerPayment{
  authToken(): Token;
  sendPayment(): void;
  receivePayment():void;
}