import React, { useEffect, useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';

import { TreeViewContainer, CarRentalDisplay } from '../styles/CarRental.styles';
import {
  CarRentalTreeItem,
  AddressTreeItem,
  SingleTreeItem,
  CarRentalTreeViewBox,
  CarTreeItem,
  CarsTreeItem,
} from '../styles/CarRentalTreeView.styles';
import CarRentalsClient from '../middleware/carRentalsClient';
import ICarRentalsResponse from '../models/ICarRentalsResponse.type';
import ICar from '../models/ICar.type';

interface TreeViewProps {
  businessPartnerId: number;
}

const RentalsTreeView = (props: TreeViewProps) => {
  const { businessPartnerId } = props;
  const [carRentals, setCarRentals] = useState<ICarRentalsResponse[]>([]);

  const displayTreeItem = (name: string, id: string, value: string) => (
    <div className="row">
      <div className="col">{name}</div>
      <div className="col">
        <SingleTreeItem nodeId={id} label={value} />
      </div>
    </div>
  );

  const displayRental = (carRental: ICarRentalsResponse, car: ICar) => {
    if (car === undefined || carRental === undefined) {
      return '';
    }
    return (
      <CarTreeItem
        nodeId={`${carRental.rentalId.toString()}_car_${car.carId.toString()}`}
        label={car.carName}
      >
        {displayTreeItem(
          'CarId:',
          `${carRental.rentalId.toString()}CarId${car.carId}`,
          car.carId,
        )}
        {displayTreeItem(
          'CarName:',
          `${carRental.rentalId.toString()}CarName${car.carName}`,
          car.carName,
        )}
        {displayTreeItem(
          'Mileage:',
          `${carRental.rentalId.toString()}Mileage${car.mileage}`,
          car.mileage.toString(),
        )}
      </CarTreeItem>
    );
  };

  const displayCarRental = (carRental: ICarRentalsResponse) => {
    if (carRental === undefined) {
      return '';
    }
    return (
      <CarRentalDisplay>
        <CarRentalTreeItem nodeId={`${carRental.rentalId.toString()}`} label={`Rental: ${carRental.name}`}>
          <AddressTreeItem nodeId={`${carRental.rentalId.toString()}_addr${carRental.address}`} label="Address">
            {displayTreeItem('Street: ', carRental.rentalId + carRental.address.streetName, carRental.address.streetName)}
            {displayTreeItem(
              'House Number: ',
              carRental.rentalId + carRental.address.streetHouseNumber,
              carRental.address.streetHouseNumber,
            )}
            {displayTreeItem('City: ', carRental.rentalId + carRental.address.city, carRental.address.city)}
            {displayTreeItem(
              'Postal Code: ',
              carRental.rentalId + carRental.address.cityPostalCode,
              carRental.address.cityPostalCode,
            )}
            {displayTreeItem('Country: ', carRental.rentalId + carRental.address.country, carRental.address.country)}
          </AddressTreeItem>
          <CarsTreeItem nodeId={`${carRental.rentalId.toString()})_cars`} label="Cars">
            {carRental.cars?.map((t) => displayRental(carRental, t))}
          </CarsTreeItem>
          {displayTreeItem('Trading Name: ', carRental.rentalId + carRental.tradingName, carRental.tradingName)}
          {displayTreeItem('Phone: ', carRental.rentalId + carRental.phoneNumber, carRental.phoneNumber)}
          {displayTreeItem(
            'Contract Phone: ',
            carRental.rentalId + carRental.contractPhoneNumber,
            carRental.contractPhoneNumber,
          )}
          {displayTreeItem(
            'Details: ',
            `${carRental.rentalId.toString()}_customMessage`,
            carRental.customMessage ? carRental.customMessage : '',
          )}
        </CarRentalTreeItem>
      </CarRentalDisplay>
    );
  };

  const displayCarRentals = (carRentalsToDisplay: ICarRentalsResponse[]) => {
    if (carRentalsToDisplay === undefined) {
      return '';
    }
    return <>{carRentalsToDisplay.map((cr) => displayCarRental(cr))}</>;
  };

  const fetchCarRentals = (bpId: number) => {
    console.log(`Fetching CarRentals for ${bpId}`);
    CarRentalsClient.get(String(bpId))
      .then((response) => {
        const carRentalsResponse: ICarRentalsResponse[] = response.data;
        setCarRentals(carRentalsResponse);
        console.log(`Car rentals: ${JSON.stringify(response.data)}`);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
        setCarRentals([]);
      });
  };

  useEffect(() => {
    console.log(`TreeView - Use effect - ${businessPartnerId}`);
    fetchCarRentals(businessPartnerId);
  }, [businessPartnerId]);

  return (
    <TreeViewContainer>
      <div className="container">
        <div className="row">
          <CarRentalTreeViewBox sx={{ height: '100%' }}>
            <TreeView
              aria-label="controlled"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: '100%', flexGrow: 1, maxHeight: 400, overflowY: 'auto' }}
            >
              {carRentals ? displayCarRentals(carRentals) : 'Empty'}
            </TreeView>
          </CarRentalTreeViewBox>
        </div>
      </div>
    </TreeViewContainer>
  );
};

export default RentalsTreeView;
