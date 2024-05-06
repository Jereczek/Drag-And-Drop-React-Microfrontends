import { GlobalStore, IGlobalStore } from 'redux-micro-frontend';
import ICarItem from '../../models/ICarItem.type';
import { CarReducer } from './carReducer';
import { ActionSetSelectedList, ActionSetAvailableList, ACTIONS } from './global.actions';

export namespace ReduxGlobalStore {
  const REDUX_MIDDLEWARE_NAME = 'CarApp';

  const globalStore: IGlobalStore = GlobalStore.Get(false, undefined);
  globalStore.CreateStore(REDUX_MIDDLEWARE_NAME, CarReducer, [], ACTIONS);

  export const sendCarSelectedGlobalAction = (selectedCars: ICarItem[]) => {
    globalStore.DispatchAction(REDUX_MIDDLEWARE_NAME, ActionSetSelectedList(selectedCars));
  };

  export const sendCarAvailableGlobalAction = (availableCars: ICarItem[]) => {
    globalStore.DispatchAction(REDUX_MIDDLEWARE_NAME, ActionSetAvailableList(availableCars));
  };

  /* eslint-disable-next-line no-unused-vars */
  export const subscribeOnCarAction = (callback: (stateChanged: any) => void) => {
    globalStore.SubscribeToPartnerState(REDUX_MIDDLEWARE_NAME, REDUX_MIDDLEWARE_NAME, callback);
  };
}
