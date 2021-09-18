import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import { reducer } from './reducers/reducer';
import mySaga from './sagas/mySaga';

const sagaMiddleware = createSagaMiddleware();

//this store hold's the app data.
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga);

export { store }