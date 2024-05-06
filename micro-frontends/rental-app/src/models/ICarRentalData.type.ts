import IRentalAddress from './IRentalAddress.type';
import ICar from './ICar.type';

interface ICarRentalData {
  name: string,
  contractPhoneNumber: string,
  address: IRentalAddress,
  tradingName: string,
  phoneNumber: string,
  customMessage?: string,
  cars?: ICar[];
}

export default ICarRentalData;
