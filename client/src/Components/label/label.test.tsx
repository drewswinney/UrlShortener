import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import Label from '.';

it('renders without crashing', () => {
    const { getByText } = render(<Label text="Test Label" fontColor="#ffffff" fontSize={12} />);
    expect(getByText("Test Label")).toBeDefined();
});