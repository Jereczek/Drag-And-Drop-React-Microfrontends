import ICarItem from '../../models/ICarItem.type';

export const ACTION_CAR_SELECTED_GLOBAL = 'CAR_SELECTED_GLOBAL';
export const ACTION_CAR_AVAILABLE_GLOBAL = 'CAR_AVAILABLE_GLOBAL';
export const ACTIONS = [ACTION_CAR_SELECTED_GLOBAL, ACTION_CAR_AVAILABLE_GLOBAL];

export const ActionSetSelectedList = (selectedCars: ICarItem[]) => ({
  type: ACTION_CAR_SELECTED_GLOBAL,
  payload: selectedCars,
});

export const ActionSetAvailableList = (availableCars: ICarItem[]) => ({
  type: ACTION_CAR_AVAILABLE_GLOBAL,
  payload: availableCars,
});
