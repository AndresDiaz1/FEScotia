import React from 'react';
import AccountsPage from './Accounts';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import AccountCard from '../components/AccountCard';

describe('Login component', () => {
  describe('Initial state', () => {
    it('Should render No accounts', () => {
      const state = {
        accounts: {
          isLoading: false,
          accounts: [],
          errorMessage: '',
        },
      };
      const store = configureStore([thunk])(state);
      const component = mount(
        <Provider store={store}>
          <AccountsPage />
        </Provider>
      );
      expect(component).toMatchSnapshot();
    });

    it('Should render Error message', () => {
      const state = {
        accounts: {
          isLoading: false,
          accounts: [],
          errorMessage: 'There was a error Testing',
        },
      };
      const store = configureStore([thunk])(state);
      const component = mount(
        <Provider store={store}>
          <AccountsPage />
        </Provider>
      );
      expect(component).toMatchSnapshot();
    });

    it('Should render account cards', () => {
      const state = {
        accounts: {
          isLoading: false,
          accounts: [
            {
              id: '1',
              clientId: 1,
              accountType: 'savings',
              status: 60,
              availableValue: 33,
            },
            {
              id: '2',
              clientId: 1,
              accountType: 'checking',
              status: 65,
              availableValue: 45,
            },
            {
              id: '3',
              clientId: 1,
              accountType: 'credit card',
              status: 17,
              availableValue: 23,
            },
          ],
          errorMessage: '',
        },
      };
      const store = configureStore([thunk])(state);
      const component = mount(
        <Provider store={store}>
          <AccountsPage />
        </Provider>
      );
      const grid = component.find(AccountCard);
      expect(grid.length).toEqual(state.accounts.accounts.length);
    });
  });
});
