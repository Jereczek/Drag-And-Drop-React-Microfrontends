import ICarItem from './ICarItem.type';

interface ICarsContextState {
    selectedCars: ICarItem[],
    availableCars: ICarItem[],
}

export default ICarsContextState;
