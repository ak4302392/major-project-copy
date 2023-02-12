/* eslint-disable import/no-import-module-exports */
/**
 * Create the store with dynamic reducers
 */

import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { forceReducerReload } from 'redux-injectors';
import thunk from 'redux-thunk';
import axios, { AxiosStatic } from 'axios';
import { setIsLoading, setResponseInfo } from '../components/core/coreSlice';
import history from './history';
import createReducer from './reducers';
import { listenerMiddleware } from './listenerMiddleware';

function configureAppStore(initialState = {}) {
  const middlewares = [thunk, routerMiddleware(history)];

  const store = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(middlewares),
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
  });

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     forceReducerReload(store);
  //   });
  // }

  return store;
}

const store = configureAppStore();

const setupAxios = (axiosStatic: AxiosStatic, storeLocal: any) => {
  axiosStatic.interceptors.request.use(
    (config) => {
      storeLocal.dispatch(setIsLoading({ isLoading: true }));
      return config;
    },
    (err) => Promise.reject(err)
  );
  axiosStatic.interceptors.response.use(
    (response) => {
      storeLocal.dispatch(setResponseInfo({ status: 'success', message: response.data.message }));
      storeLocal.dispatch(setIsLoading({ isLoading: false }));
      return response;
    },
    (err) => {
      storeLocal.dispatch(
        setResponseInfo({
          status: 'failure',
          message: err.response.data.message,
        })
      );
      storeLocal.dispatch(setIsLoading({ isLoading: false }));
      return Promise.reject(err);
    }
  );
};

setupAxios(axios, store);

export default store;
