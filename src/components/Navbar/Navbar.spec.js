import {
  cleanup,
  render,
  screen
} from '@testing-library/react';

import RouterWrapper from '../../tests/RouterWrapper';

import Navbar from './Navbar'

jest.mock('axios')

describe('Navbar', () => {
  beforeEach(() => {
    cleanup()
  })

  test('Should show marvel text and render navbar', async () => {
    render (
      <RouterWrapper>
        <Navbar />
      </RouterWrapper>
    );
    
    const logoLink = screen.getByRole('link');
    expect(logoLink).toBeInTheDocument()
  });

  test('Should render logo link pointing to index page', async () => {
    render (
      <RouterWrapper>
        <Navbar />
      </RouterWrapper>
    );
    
    const logoLink = screen.getByRole('link');
    expect(logoLink).toHaveAttribute('href', '/')
  });
});
