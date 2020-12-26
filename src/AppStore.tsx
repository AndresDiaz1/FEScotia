import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { accoungtsReducer } from './accounts/AccountsStore';
import { detailsReducer } from './details/DetailsStore';
import { loginReducer } from './login/LoginStore';

const reducers = {
  login: loginReducer,
  accounts: accoungtsReducer,
  details: detailsReducer,
};

const middleware = [...getDefaultMiddleware()];

export const appStore = configureStore({
  reducer: reducers,
  middleware,
  devTools: true,
  preloadedState: {},
  enhancers: [],
});
