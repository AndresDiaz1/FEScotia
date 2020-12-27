import React from 'react';
import { mount } from 'enzyme';
import Details from './Details';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

describe('Details Component', () => {
    describe('Initial state', () => {
        it('should render with no details', () => {

            const state = {details: {
                isLoading: false,
                details: [],
                errorMessage: ''
              }
            }

            const store = configureStore([thunk])(state);

            const component = mount(
                <Provider store={store}>
                    <Details />
                    </Provider>
            );
            expect(component).toMatchSnapshot();
        });
        it('should render error', () => {

            const state = {details: {
                isLoading: false,
                details: [],
                errorMessage: 'error details test'
              }
            }

            const store = configureStore([thunk])(state);

            const component = mount(
                <Provider store={store}>
                    <Details />
                    </Provider>
            );
            expect(component).toMatchSnapshot();
        });
        it('should render details', () => {

            const state = {details: {
                isLoading: false,
                details: [
                  {
                    id: '2',
                    accountId: 1,
                    transactionDate: '2020-12-27T16:52:12.129Z',
                    transactionAmount: '-377.30',
                    description: 'black'
                  },
                  {
                    id: '1',
                    accountId: 1,
                    transactionDate: '2020-12-26T04:44:15.582Z',
                    transactionAmount: '84.22',
                    description: '24/365 payment'
                  },
                  {
                    id: '3',
                    accountId: 1,
                    transactionDate: '2020-12-20T08:14:47.864Z',
                    transactionAmount: '641.09',
                    description: 'middleware sky blue'
                  }
                ],
                errorMessage: ''
              }
            }

            const store = configureStore([thunk])(state);

            const component = mount(
                <Provider store={store}>
                    <Details />
                    </Provider>
            );
            expect(component).toMatchSnapshot();
        });
    });
});