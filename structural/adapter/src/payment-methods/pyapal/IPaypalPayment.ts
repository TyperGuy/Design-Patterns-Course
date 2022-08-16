import Token from '../../utils/Token';
export default interface IPaypalPayment {
  authToken(): Token;
  paypalPayment():void;
  paypalReceive():void;
}