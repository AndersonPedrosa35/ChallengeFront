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
    const { getByTestId } = renderWithRoute(<App testing={ true } />);
    const fromQuote = getByTestId('from');
    const destinationQuote = getByTestId('destination');
    const departDateQuote = getByTestId('departDate');
    const returnDateQuote = getByTestId('returnDate');
    const peopleQuote = getByTestId('people');
    const transportationQuote = getByTestId('transportation');
    const nameQuote = getByTestId('name');

    expect(fromQuote).toHaveTextContent('From');
    expect(destinationQuote).toHaveTextContent('Destination');
    expect(departDateQuote).toHaveTextContent('Depart Date');
    expect(returnDateQuote).toHaveTextContent('Return Date');
    expect(peopleQuote).toHaveTextContent('People');
    expect(transportationQuote).toHaveTextContent('Transportation');
    expect(nameQuote).toHaveTextContent('Name');
    
    const inputFrom = fromQuote.childNodes[1];
    const inputDestination = destinationQuote.childNodes[1];
    const inputDepartDate = departDateQuote.childNodes[1];
    const inputReturnDate = returnDateQuote.childNodes[1];
    const inputPeople = peopleQuote.childNodes[1];
    const inputTransportation = transportationQuote.childNodes[1];
    const inputName = nameQuote.childNodes[1];

    expect(inputFrom).toHaveAttribute('type', 'text');
    expect(inputDestination).toHaveAttribute('type', 'text');
    expect(inputDepartDate).toHaveValue('1');
    expect(inputReturnDate).toHaveValue('1');
    expect(inputPeople).toHaveValue('1');
    expect(inputTransportation).toHaveValue('airplane');
    expect(inputName).toHaveAttribute('type', 'text');
  });

  it('')
  
})
