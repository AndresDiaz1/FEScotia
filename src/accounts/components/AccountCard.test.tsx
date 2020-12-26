import React from 'react';
import AccountCard from './AccountCard';
import { mount } from 'enzyme';

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
      const component = mount(<AccountCard {...account} />);
      expect(component).toMatchSnapshot();
    });
  });
});
