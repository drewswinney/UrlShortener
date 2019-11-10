import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import TextBox from '.';

it('renders without crashing', () => {
    const { getByPlaceholderText } = render(<TextBox placeholder="Placeholder"/>);
    expect(getByPlaceholderText("Placeholder")).toBeDefined();
});