import { combineReducers, createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import books from './books';
import { persistReducer, persistStore } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';

const reducer = combineReducers({
  books
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export {
  store,
  persistor
};
