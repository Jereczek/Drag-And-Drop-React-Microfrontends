/* eslint-disable react/jsx-props-no-spreading, import/no-unresolved, no-unused-vars, no-param-reassign */
import React, { useState, lazy, Suspense } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {
  FormError,
  FormInput,
  ContentFormContainer,
  FormSuccess,
  DropCarsArea,
  SelectedCarsHeader,
} from '../styles/CarRentalForm.styles';
import CarRentalsClient from '../middleware/carRentalsClient';
import ICarRentalData from '../models/ICarRentalData.type';
import ICarItem from '../models/ICarItem.type';
import ICar from '../models/ICar.type';
import '../car-decl.d';

interface CarShareFormProps {
  businessPartnerId: number;
}

const RemoteSelectedCarDroppableAreas = lazy(() => import('car/SelectedCars'));

const CarShareForm = ({ businessPartnerId }: CarShareFormProps) => {
  const [errorResponse, setErrorResponse] = useState('');
  const [successResponse, setSuccessResponse] = useState('');
  const [selectedCarsState, setSelectedCarsState] = useState<ICarItem[]>([]);

  const fillCarsInRequest = (carRental: ICarRentalData) => {
    carRental.cars = [];
    selectedCarsState.forEach((car) => {
      const carTmp: ICar = {
        carId: car.id.toString(),
        carName: car.description,
        mileage: car.mileage,
      };
      carRental.cars?.push(carTmp);
    });
  };

  const carRentalData: ICarRentalData = {
    name: '',
    contractPhoneNumber: '',
    address: {
      streetName: '',
      streetHouseNumber: '',
      cityPostalCode: '',
      city: '',
      country: 'DE',
    },
    cars: [],
    tradingName: '',
    phoneNumber: '',
    customMessage: '',
  };

  const formik = useFormik({
    initialValues: carRentalData,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      contractPhoneNumber: Yup.string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(11, 'Phone must be exactly 11 digits')
        .max(11, 'Phone must be exactly 11 digits')
        .required('Required'),
      address: Yup.object({
        streetName: Yup.string().max(25, 'Must be 25 characters or less').required('Required'),
        streetHouseNumber: Yup.number().max(9999999999999, 'Must be 20 characters or less').required('Required'),
        cityPostalCode: Yup.string()
          .matches(/^[0-9]+$/, 'Must be only digits')
          .min(5, 'Postal code must be exactly 5 digits')
          .max(5, 'Postal code must be exactly 5 digits')
          .required('Required'),
        city: Yup.string().max(40).required('Required'),
        country: Yup.string().max(40).required('Required'),
      }),
      tradingName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(11, 'Phone must be exactly 11 digits')
        .max(11, 'Phone must be exactly 11 digits')
        .required('Required'),
      customMessage: Yup.string().max(255).nullable(),
    }),
    onSubmit: (values) => {
      fillCarsInRequest(values);
      console.log(values);
      CarRentalsClient.add(String(businessPartnerId), values)
        .then(() => {
          setSuccessResponse('Added new Car Rental');
          setErrorResponse('');
        })
        .catch((error) => {
          setSuccessResponse('');
          console.log(error);
          setErrorResponse(error.response.data ? error.response.data.message : error.message);
        });
    },
  });

  const displaySelectedCars = () => (
    <Suspense fallback={<div> Loading...</div>}>
      <DropCarsArea>
        <SelectedCarsHeader>
          Selected Cars
          <br /><br />
        </SelectedCarsHeader>
        <RemoteSelectedCarDroppableAreas setSelectedCarsCallback={setSelectedCarsState} />
      </DropCarsArea>
    </Suspense>
  );

  return (
    <ContentFormContainer>
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="row">
            <FormInput>
              <div className="row">
                <div className="col">Rental Name: </div>
                <div className="col">
                  <input id="name" type="text" {...formik.getFieldProps('name')} />
                  {formik.touched.name && formik.errors.name ? <FormError>{formik.errors.name}</FormError> : null}
                </div>
              </div>
            </FormInput>
            <FormInput>
              <div className="row">
                <div className="col">Rental contact phone number: </div>
                <div className="col">
                  <input id="contractPhoneNumber" type="text" {...formik.getFieldProps('contractPhoneNumber')} />
                  {formik.touched.contractPhoneNumber && formik.errors.contractPhoneNumber ? (
                    <FormError>{formik.errors.contractPhoneNumber}</FormError>
                  ) : null}
                </div>
              </div>
            </FormInput>
            <FormInput>
              <div className="row">
                <div className="col">Street: </div>
                <div className="col">
                  <input id="streetName" type="text" {...formik.getFieldProps('address.streetName')} />
                  {formik.touched.address?.streetName && formik.errors.address?.streetName ? (
                    <FormError>{formik.errors.address?.streetName}</FormError>
                  ) : null}
                </div>
              </div>
            </FormInput>
            <FormInput>
              <div className="row">
                <div className="col">House number: </div>
                <div className="col">
                  <input id="streetHouseNumber" type="text" {...formik.getFieldProps('address.streetHouseNumber')} />
                  {formik.touched.address?.streetHouseNumber && formik.errors.address?.streetHouseNumber ? (
                    <FormError>{formik.errors.address?.streetHouseNumber}</FormError>
                  ) : null}
                </div>
              </div>
            </FormInput>
            <FormInput>
              <div className="row">
                <div className="col">Postal Code: </div>
                <div className="col">
                  <input id="cityPostalCode" type="text" {...formik.getFieldProps('address.cityPostalCode')} />
                  {formik.touched.address?.cityPostalCode && formik.errors.address?.cityPostalCode ? (
                    <FormError>{formik.errors.address?.cityPostalCode}</FormError>
                  ) : null}
                </div>
              </div>
            </FormInput>
            <FormInput>
              <div className="row">
                <div className="col">City: </div>
                <div className="col">
                  <input id="city" type="text" {...formik.getFieldProps('address.city')} />
                  {formik.touched.address?.city && formik.errors.address?.city ? (
                    <FormError>{formik.errors.address?.city}</FormError>
                  ) : null}
                </div>
              </div>
            </FormInput>
            <FormInput>
              <div className="row">
                <div className="col">Country: </div>
                <div className="col">
                  <input id="country" type="text" {...formik.getFieldProps('address.country')} disabled />
                  {formik.touched.address?.country && formik.errors.address?.country ? (
                    <FormError>{formik.errors.address?.country}</FormError>
                  ) : null}
                </div>
              </div>
            </FormInput>
            <FormInput>
              <div className="row">
                <div className="col">Trading name: </div>
                <div className="col">
                  <input id="tradingName" type="text" {...formik.getFieldProps('tradingName')} />
                  {formik.touched.tradingName && formik.errors.tradingName ? (
                    <FormError>{formik.errors.tradingName}</FormError>
                  ) : null}
                </div>
              </div>
            </FormInput>
            <FormInput>
              <div className="row">
                <div className="col">Phone number: </div>
                <div className="col">
                  <input id="phoneNumber" type="text" {...formik.getFieldProps('phoneNumber')} />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <FormError>{formik.errors.phoneNumber}</FormError>
                  ) : null}
                </div>
              </div>
            </FormInput>
            <FormInput>
              <div className="row">
                <div className="col">Custom message: </div>
                <div className="col">
                  <input id="customMessage" type="text" {...formik.getFieldProps('customMessage')} />
                  {formik.touched.customMessage && formik.errors.customMessage ? (
                    <FormError>{formik.errors.customMessage}</FormError>
                  ) : null}
                </div>
              </div>
            </FormInput>
            {selectedCarsState ? displaySelectedCars() : 'Cannot load selected cars'}
            {successResponse ? <FormSuccess>Added new Rental</FormSuccess> : ''}
            {errorResponse ? (
              <FormError>
                Couldn&apos;t add a new Rental! Error:&nbsp;
                {errorResponse}
              </FormError>
            ) : (
              ''
            )}
            <Box textAlign="center">
              <Button type="submit" className="buttonSubmit" style={{ maxWidth: '220px', minWidth: '220px' }}>
                Submit
              </Button>
            </Box>
          </div>
        </div>
      </form>
    </ContentFormContainer>
  );
};

export default CarShareForm;
