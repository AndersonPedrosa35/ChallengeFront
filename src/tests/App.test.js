import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRoute from './renderWithRouter.js';
import { createStorage } from '../utils/localStorage';
import { convertDate } from '../components/CreateQuotes';
import { fireEvent, waitFor } from '@testing-library/react';

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
  beforeAll(() => {
    createStorage('user', 
    { name: 'John Doe', email: 'teste.teste@gmail.com', token: '1234567' })
  });
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
    expect(inputDepartDate).toHaveAttribute('type', 'date');
    expect(inputReturnDate).toHaveAttribute('type', 'date');
    expect(inputPeople).toHaveValue('1');
    expect(inputTransportation).toHaveValue('airplane');
    expect(inputName).toHaveAttribute('type', 'text');
  });
});

describe('test the interactions in inputs into create quotes form', () => {
  beforeAll(() => {
    createStorage('user', 
    { name: 'John Doe', email: 'teste.teste@gmail.com', token: '1234567' })
  });
  it('test end-to-end into create quotes form', () => {
    const { getByTestId, getByRole } = renderWithRoute(<App testing={ true } />);
    const inputFrom = getByTestId('from').childNodes[1];
    const inputDestination = getByTestId('destination').childNodes[1];
    const inputDepartDate = getByTestId('departDate').childNodes[1];
    const inputReturnDate = getByTestId('returnDate').childNodes[1];
    const inputPeople = getByTestId('people').childNodes[1];
    const inputTransportation = getByTestId('transportation').childNodes[1];
    const inputName = getByTestId('name').childNodes[1];
    const buttonSubmit = getByRole('button', { name: 'Create a quote' });

    userEvent.type(inputFrom, 'Buenos Aires');
    userEvent.type(inputDestination, 'Santiago');
    fireEvent.change(inputReturnDate, { target: { value: '2023-10-23' } });
    userEvent.selectOptions(inputPeople, '2');
    userEvent.selectOptions(inputTransportation, 'train');
    userEvent.type(inputName, 'Juan');

    expect(inputFrom).toHaveValue('Buenos Aires');
    expect(inputDestination).toHaveValue('Santiago');
    expect(inputDepartDate).toHaveValue(convertDate(Date.now()));
    expect(inputReturnDate).toHaveValue('2023-10-23');
    expect(inputPeople).toHaveValue('2');
    expect(inputTransportation).toHaveValue('train');
    expect(inputName).toHaveValue('Juan');
    expect(buttonSubmit).toBeEnabled()

    userEvent.click(buttonSubmit);
    waitFor(() => {
      expect(inputFrom).toHaveValue('');
      expect(inputDestination).toHaveValue('');
      expect(inputDepartDate).toHaveValue('1');
      expect(inputReturnDate).toHaveValue('1');
      expect(inputPeople).toHaveValue('1');
      expect(inputTransportation).toHaveValue('airplane');
      expect(inputName).toHaveValue('');
    })
  });

  it('should button into create quotes form is disabled', () => {
    const { getByTestId, getByRole } = renderWithRoute(<App testing={ true } />);
    const inputFrom = getByTestId('from').childNodes[1];
    const inputDestination = getByTestId('destination').childNodes[1];
    const inputDepartDate = getByTestId('departDate').childNodes[1];
    const inputReturnDate = getByTestId('returnDate').childNodes[1];
    const inputPeople = getByTestId('people').childNodes[1];
    const inputTransportation = getByTestId('transportation').childNodes[1];
    const inputName = getByTestId('name').childNodes[1];
    const buttonSubmit = getByRole('button', { name: 'Create a quote' });

    userEvent.type(inputFrom, 'Buenos Aires');
    userEvent.type(inputDestination, 'Santiago');
    fireEvent.change(inputDepartDate, { target: { value: '2022-10-23' } });
    fireEvent.change(inputReturnDate, { target: { value: '2023-10-23' } });
    userEvent.selectOptions(inputPeople, '2');
    userEvent.selectOptions(inputTransportation, 'train');
    userEvent.type(inputName, '');

    expect(inputFrom).toHaveValue('Buenos Aires');
    expect(inputDestination).toHaveValue('Santiago');
    expect(inputDepartDate).toHaveValue('2022-10-23');
    expect(inputReturnDate).toHaveValue('2023-10-23');
    expect(inputPeople).toHaveValue('2');
    expect(inputTransportation).toHaveValue('train');
    expect(inputName).toHaveValue('');
    expect(buttonSubmit).toBeDisabled()
  });
});

describe('test the interactions and renders the Pending Quotes Table', () => {
  beforeAll(() => {
    createStorage('user', 
    { name: 'John Doe', email: 'teste.teste@gmail.com', token: '1234567' })
  });
  it("should renders the Pending quotes table", () => {
    const { getByAltText, getByRole } = renderWithRoute(<App testing={ true } />);
    const iconPendingQuotes = getByAltText('Pending Quotes');
    const titlePendingQuotes = getByRole('heading', { level: 4, name: "Pending Quotes" })
    const table = getByRole('table');
    const idColumn = table.childNodes[0].childNodes[0];
    const nameColumn = table.childNodes[0].childNodes[1];
    const destinationColumn = table.childNodes[0].childNodes[2];
    const priceColumn = table.childNodes[0].childNodes[3];
    
    expect(iconPendingQuotes).toHaveAttribute('src', 'IconHistory.svg');
    expect(titlePendingQuotes).toBeInTheDocument();
    
    expect(table).toBeInTheDocument();
    expect(idColumn).toHaveTextContent('Id');
    expect(nameColumn).toHaveTextContent('Name');
    expect(destinationColumn).toHaveTextContent('Destina..');
    expect(priceColumn).toHaveTextContent('Price');
  });
});


describe('test the interactions and renders the Leads List', () => {
  beforeAll(() => {
    createStorage('user', 
    { name: 'John Doe', email: 'teste.teste@gmail.com', token: '1234567' })
  });
  it('should renders the Leads List', () => {
    const { getByRole, getByAltText } = renderWithRoute(<App testing={ true } />)
    const titleListLeads = getByRole('heading', { level: 4, name: 'New Leads' });
    const iconListLeads = getByAltText("New Leads");

    expect(titleListLeads).toBeInTheDocument();
    expect(iconListLeads).toHaveAttribute('src', "IconLeads.svg");
  });
});

describe('test the interactions and renders the Chat', () => {
  beforeAll(() => {
    createStorage('user', 
    { name: 'John Doe', email: 'teste.teste@gmail.com', token: '1234567' })
  });
  it('should renders the Chat', () => {
    const { getByRole, getByAltText } = renderWithRoute(<App testing={ true } />);
    const titleChat = getByRole('heading', { name: "Team chat" });
    const iconChat = getByAltText('Chat');

    expect(titleChat).toBeInTheDocument();
    expect(iconChat).toBeInTheDocument();
  })
})
