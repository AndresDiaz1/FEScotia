import React from 'react';
import { mount } from 'enzyme';
import SimpleHeader from './SimpleHeader';

describe('SimpleHeader Component', () => {
  describe('Initial state', () => {
    it('Should render', () => {
      const component = mount(<SimpleHeader title="Simple Header Title" />);
      expect(component).toMatchSnapshot();
    });
  });
});
