import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';

describe('App component', () => {
  describe('Initial state', () => {
    it('Should render', async () => {
      const state = {
        login: {
          isLogged: false,
          logginIn: false,
          user: {},
          errorMessage: '',
        },
      };
      const store = configureStore([thunk])(state);

      const component = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
      await act(async () => {
        expect(component).toBeDefined();
      });
    });
  });
});
