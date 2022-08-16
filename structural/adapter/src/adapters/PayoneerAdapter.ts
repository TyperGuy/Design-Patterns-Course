import IPaypalPayment from '../payment-methods/pyapal/IPaypalPayment';
import Token from '../utils/Token';
import Payoneer from '../payment-methods/payoneer/Payoneer';

export default class PayoneerAdapter implements IPaypalPayment{

  private token: Token;
  constructor(private payoneer : Payoneer){
      console.log("Adaptando Payoneer usando os métodos e padrões do PayPal")
  }
  authToken(): Token {
    return new Token();
  }
  paypalPayment(): void {
    return this.payoneer.sendPayment();
  }
  paypalReceive(): void {
    this.payoneer.receivePayment();
  }
  
}