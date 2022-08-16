import IPaypalPayment from "./payment-methods/pyapal/IPaypalPayment";
import Payoneer from './payment-methods/payoneer/Payoneer';
import PayoneerAdapter from './adapters/PayoneerAdapter';

const payment : IPaypalPayment = new PayoneerAdapter(new Payoneer());
payment.paypalPayment();
payment.paypalReceive();