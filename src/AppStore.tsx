import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loginReducer } from './login/LoginStore';

const reducers = {
  login: loginReducer,
};

const middleware = [...getDefaultMiddleware()];

export const appStore = configureStore({
  reducer: reducers,
  middleware,
  devTools: true,
  preloadedState: {},
  enhancers: [],
});
