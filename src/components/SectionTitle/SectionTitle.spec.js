import {
  cleanup,
  render,
  screen
} from '@testing-library/react';

import SectionTitle from './SectionTitle'

jest.mock('axios')

describe('SectionTitle', () => {
  beforeEach(() => {
    cleanup()
  })

  test('Should render with a text', async () => {
    render (
      <SectionTitle text='Dummy Title' />
    );
    
    expect(screen.getByText('Dummy Title')).toBeInTheDocument()
  });

  test('Should not render component if no text is provided', async () => {
    render (
      <SectionTitle />
    );
    
    expect(screen.queryByText('Dummy Title')).not.toBeInTheDocument()
  });
});
