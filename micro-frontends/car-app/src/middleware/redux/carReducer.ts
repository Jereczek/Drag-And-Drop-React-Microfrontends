/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { Reducer, AnyAction } from 'redux';
import ICarContextState from '../../models/ICarsContextState.type';
import { ACTION_CAR_SELECTED_GLOBAL, ACTION_CAR_AVAILABLE_GLOBAL } from './global.actions';

const initialState: ICarContextState = {
  selectedCars: [],
  availableCars: [],
};

export const CarReducer: Reducer = (state: ICarContextState = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTION_CAR_SELECTED_GLOBAL:
      return { ...state, selectedCars: state.selectedCars = action.payload };
    case ACTION_CAR_AVAILABLE_GLOBAL:
      return { ...state, availableCars: state.availableCars = action.payload };
    default:
      return state;
  }
};
