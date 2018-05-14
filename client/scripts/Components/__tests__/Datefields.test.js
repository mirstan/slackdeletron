import React from 'react';
import { shallow } from 'enzyme';
import { createRenderer } from 'react-test-renderer/shallow';
import moment from 'moment';

import DateFields from '../DateFields';

const DEFAULT_PROPS = {
  stateDate: moment('2018-05-14').utc(),
  endDate: moment('2018-05-15').utc(),
  onChange: jest.fn()
};

describe('<DateFields />', () => {
  it('Renders Correctly', () => {
    const renderer = createRenderer();
    const dates = renderer.render(<DateFields {...DEFAULT_PROPS} />);
    expect(dates).toMatchSnapshot();
  });

  it('sets the correct state when onFocusChange is called', () => {
    const mockFocusedInput = 'startDate';
    const wrapper = shallow(<DateFields {...DEFAULT_PROPS} />);
    wrapper.instance().onFocusChange(mockFocusedInput);
    expect(wrapper.state().focusedInput).toBe(mockFocusedInput);
  });
});
