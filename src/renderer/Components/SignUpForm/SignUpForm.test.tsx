/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './SignUpForm';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

describe('SignUpForm component', () => {
  const mockToggle = jest.fn();
  const mockSetIsLoading = jest.fn();
  const mockSetLocalUser = jest.fn();

  const mockProps = {
    isLoading: false,
    isLogin: false,
    toggleTab: mockToggle,
    setIsLoading: mockSetIsLoading,
    setLocalUser: mockSetLocalUser
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper: any = shallow(<SignUpForm {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
