import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import CarShareForm from './CarShareForm';
import RentalsTreeView from './RentalsTreeView';
import { CarRentalContainer, Border } from '../styles/CarRental.styles';

interface CarRentalProps {
  businessPartnerId: number;
}

const CarRental = ({ businessPartnerId }: CarRentalProps) => {
  const [isTreeViewOn, setIsTreeViewOn] = useState(false);
  const [isAddCarRentalOn, setIsAddCarRentalOn] = useState(true);

  const addRentalButtonClick = () => {
    setIsTreeViewOn(false);
    setIsAddCarRentalOn(true);
  };

  const treeViewButtonClick = () => {
    setIsTreeViewOn(true);
    setIsAddCarRentalOn(false);
  };

  return (
    <CarRentalContainer>
      <div className="container">
        <div className="row">
          <Stack direction="row">
            <div className="col">
              <Border>
                <Button variant={isTreeViewOn ? 'contained' : 'outlined'} onClick={treeViewButtonClick}>
                  Rentals
                </Button>
              </Border>
            </div>
            <div className="col">
              <Border>
                <Button variant={isAddCarRentalOn ? 'contained' : 'outlined'} onClick={addRentalButtonClick}>
                  Rent a car!
                </Button>
              </Border>
            </div>
          </Stack>
        </div>
        <div className="row">
          <div className="col">
            {isAddCarRentalOn ? (
              <CarShareForm businessPartnerId={businessPartnerId} />
            ) : (
              <RentalsTreeView businessPartnerId={businessPartnerId} />
            )}
          </div>
        </div>
      </div>
    </CarRentalContainer>
  );
};

export default CarRental;
