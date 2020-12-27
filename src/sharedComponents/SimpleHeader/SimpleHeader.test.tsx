import React from 'react';
import { mount } from 'enzyme';
import SimpleHeader from './SimpleHeader';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const mockHistoryGoBack = jest.fn();
const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    goBack: mockHistoryGoBack,
    push: mockHistoryPush,
  }),
}));

describe('SimpleHeader Component', () => {
  describe('Initial state', () => {
    it('Should render', async() => {
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
         <SimpleHeader title="Simple Header Title" goBack={false} />
         </Provider>
      );

      expect(component).toMatchSnapshot();
    });
    it('Should render with back button', () => {
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
         <SimpleHeader title="Simple Header Title" goBack={true} />
         </Provider>
      );
      const goBackArrow = component.find('FontAwesomeIcon.go-back-icon');
      goBackArrow.simulate('click');
      expect(mockHistoryGoBack).toHaveBeenCalled();
      expect(component).toMatchSnapshot();
    });
  });
});
