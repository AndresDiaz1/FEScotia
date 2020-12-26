import React from 'react';
import Login from './Login';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

describe('Login component', () => {
  describe('Initial state', () => {
    it('Should render', () => {
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
          <Login />
        </Provider>
      );
      expect(component).toMatchSnapshot();
    });

    it('Should render with loading', () => {
      const state = {
        login: {
          isLogged: false,
          logginIn: true,
          user: {},
          errorMessage: '',
        },
      };
      const store = configureStore([thunk])(state);

      const component = mount(
        <Provider store={store}>
          <Login />
        </Provider>
      );
      expect(component).toMatchSnapshot();
    });
    it('Should render with loading', () => {
      const state = {
        login: {
          isLogged: false,
          logginIn: false,
          user: {},
          errorMessage: 'An Error',
        },
      };
      const store = configureStore([thunk])(state);

      const component = mount(
        <Provider store={store}>
          <Login />
        </Provider>
      );
      expect(component).toMatchSnapshot();
    });
  });
});
