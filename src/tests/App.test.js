import React from 'react';
import App from '../App';
import renderWithRoute from './renderWithRouter.js';

describe('Testing hero title into home', () => {
  
  it('should renders the title', () => {
    const { getByRole } = renderWithRoute(<App testing={ true } />);
    const title = getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Welcome to your dashboard');
  });

  it('should renders the subtitle', () => {
    const { getByText } = renderWithRoute(<App testing={ true } />);
    const welcomeText = getByText(/Lorem Ipsum is simply dummy text/);
    expect(welcomeText).toBeInTheDocument();
  });

  it('should renders the image in hero', () => {
    const { getByAltText } = renderWithRoute(<App testing={ true } />);
    const image = getByAltText('hero-background');
    expect(image).toBeInTheDocument();
  });

})

describe('Testing the container quotes', () => {
  it('should renders the title into create quotes form', () => {
    const { getAllByRole, getByTestId } = renderWithRoute(<App testing={ true } />);
    const createQuotesTitle = getAllByRole('heading', { level: 4 });
    expect(createQuotesTitle[0]).toBeInTheDocument();
    expect(createQuotesTitle[0]).toHaveTextContent('Quick Quotes');
  
    const formCreateQuotes = getByTestId('form');
    expect(formCreateQuotes).toBeInTheDocument();
    expect(formCreateQuotes).toHaveAttribute('class', 'form-createQuotes');
  });

  it('should renders the inputs into create quotes form', () => {
    const { getByLabelText } = renderWithRoute(<App testing={ true } />);
    // const fromQuote = getByLabelText('From');
    // const destinationQuote = getByLabelText('Destination');
    // const departDateQuote = getByLabelText('Depart Date');
    // const returnDateQuote = getByLabelText('Return Date');
    // const peopleQuote = getByLabelText('People');
    // const transportationQuote = getByLabelText('Transportation');
    // const nameQuote = getByLabelText('Name');

    // expect(fromQuote).toBeInTheDocument();
    // expect(destinationQuote).toBeInTheDocument();
    // expect(departDateQuote).toBeInTheDocument();
    // expect(returnDateQuote).toBeInTheDocument();
    // expect(peopleQuote).toBeInTheDocument();
    // expect(transportationQuote).toBeInTheDocument();
    // expect(nameQuote).toBeInTheDocument();
    // expect(fromQuote).toHaveAttribute('type', 'text');
    // expect(destinationQuote).toHaveAttribute('type', 'text');
    // expect(departDateQuote).toHaveAttribute('value', '1');
  });
  
})
