'use strict';

import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from '../components/Dashboard'

test('renders correctly', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
});
