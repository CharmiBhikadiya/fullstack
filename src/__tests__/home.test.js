import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../pages/index';

jest.mock('next/router', () => require('next-router-mock'));
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home name='Charmi Bhikadia'/>);
 
    const heading = screen.getByRole('heading', {
      name: "Charmi Bhikadia",
    });
 
    expect(heading).toBeInTheDocument();
  });
});