import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import fetchMock from 'fetch-mock';
import Home from './Home';

const setup = () => {
  const utils = render(<Home />)
  const input = utils.getByTestId('TestInput')
  const button = utils.getByTestId('TestButton')
  return {
    input,
    button,
    ...utils,
  }
}

it('renders without crashing', () => {
    const { input, button } = setup();

    //Make sure the input button was rendered
    expect(input).toBeInTheDOM();
    //Make sure the submit button was rendered
    expect(button).toBeInTheDOM();
});

it('shows error when text is not correctly formatted url', () => {
    const { input, button, getByText } = setup();
    fireEvent.change(input, { target: { value: 'bad url' } })
    fireEvent.click(button);
    expect((input as HTMLInputElement).value).toBe('bad url')
    expect(getByText('Please insert a valid url')).toBeInTheDOM();
});

it('does not show error when text is a correctly formatted url', () => {
  const { input, button, queryByText } = setup();
  fireEvent.change(input, { target: { value: 'http://google.com' } })
  fireEvent.click(button);
  expect((input as HTMLInputElement).value).toBe('http://google.com')
  expect(queryByText('Please insert a valid url')).toBeNull();
});

it('shows short url when successfully submitted', async () => {
  const { input, button, getByText } = setup();
  const shortUrl = '4FRDE3';
  fetchMock.mock('https://localhost:5001/api/shortener/getshort?long_url=http://google.com', shortUrl);
  
  fireEvent.change(input, { target: { value: 'http://google.com' } })
  fireEvent.click(button);

  expect((input as HTMLInputElement).value).toBe('http://google.com')
  await waitForElement(() => getByText(`Your url: http://localhost:3000/s/${shortUrl}`));
  expect(getByText(`Your url: http://localhost:3000/s/${shortUrl}`)).toBeInTheDOM();

  fetchMock.reset();
});
