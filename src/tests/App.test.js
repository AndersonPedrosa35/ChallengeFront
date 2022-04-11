import React from 'react';
import App from '../App';
import renderWithRoute from './renderWithRouter.js';

describe('Testando a home da aplicação', () => {
  
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
