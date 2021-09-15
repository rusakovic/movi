import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './reducer';
import rootSaga from './sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const reduxMiddlewares = [sagaMiddleware];
// Persistence logic
const whitelist = [];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // By default no reducer is persisted, you must
  // whitelist all reducer keys you would like persisted
  whitelist,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...reduxMiddlewares)),
);

// Run the saga
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
