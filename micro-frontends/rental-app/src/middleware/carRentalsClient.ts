/* eslint class-methods-use-this: ["error", { "exceptMethods": ["add", "get"] }] */
import httpCarRental from './carRentalsServiceConfig';
import ICarRentalData from '../models/ICarRentalData.type';
import ICarRentalsResponse from '../models/ICarRentalsResponse.type';

class CarRentalsClient {
  add(businessPartnerId: string, data: ICarRentalData) {
    const endpoint = `/rentals/${businessPartnerId}`;
    return httpCarRental.post<any>(endpoint, data);
  }

  get(businessPartnerId: string) {
    const endpoint = `/rentals/${businessPartnerId}`;
    return httpCarRental.get<ICarRentalsResponse[]>(endpoint);
  }
}

export default new CarRentalsClient();
