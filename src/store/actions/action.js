import { types } from './actionType';

//Actions functionality are defined here.

//This action will be saving data in redux global state.
export const storeData = (val) => {
    return {
        type: types.STORE_DATA,
        payload: val
    }
}




