import React from 'react';
import { mount } from 'enzyme';
import InputCustom from './InputCustom';

describe('Input custom Component', () => {
    describe('Initial state', ()=> {
        it('Should render', ()=> {
            const component = mount(<InputCustom label={'Test'} onChange={()=>console.log('Test change')}/>);
            expect(component).toMatchSnapshot();
        });
    });
});