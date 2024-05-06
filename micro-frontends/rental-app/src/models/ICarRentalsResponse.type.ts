import IRentalAddress from './IRentalAddress.type';
import ICar from './ICar.type';

interface ICarRentalsResponse {
  rentalId: number,
  businessPartnerId: string,
  name: string,
  contractPhoneNumber: string,
  address: IRentalAddress,
  cars?: ICar[],
  tradingName: string,
  phoneNumber: string,
  customMessage?: string;
}

export default ICarRentalsResponse;
