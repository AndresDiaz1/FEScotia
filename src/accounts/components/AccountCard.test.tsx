import React from 'react';
import AccountCard from './AccountCard';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('AccountCard component', () => {
  describe('Initial state', () => {
    it('Should render', () => {
      const account = {
        id: '1',
        clientId: 1,
        accountType: 'savings',
        status: 60,
        availableValue: 33,
      };

      const state = {
        accounts: {
          isLoading: false,
          accounts: [account],
          errorMessage: '',
        },
      };
      const store = configureStore([thunk])(state);

      const component = mount(
        <Provider store={store}>
          <AccountCard {...account} />
        </Provider>
      );
      const detailsLabel = component.find('IonLabel.account-card__link');
      detailsLabel.simulate('click');
      expect(mockHistoryPush).toHaveBeenCalled();
      expect(component).toMatchSnapshot();
    });
  });
});
