import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import Button from '.';

it('renders without crashing', () => {
    const { getByText } = render(<Button text="Test Button"/>);
    expect(getByText("Test Button")).toBeDefined();
});