import Token from "../../utils/Token";
import IPaypalPayment from "./IPaypalPayment";

export default class Paypal implements IPaypalPayment{

  private token : Token ;
  authToken(): Token {
    return new Token();
  }
  paypalPayment(): void {
    this.token = this.authToken();
    console.log('Token: : ' + this.token.getToken());
    console.log('Efetuando pagamento');
  }
  paypalReceive(): void {
    console.log('Receiving payment via PayPal');
  }

}