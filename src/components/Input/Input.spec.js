import {
  cleanup,
  render,
  screen
} from '@testing-library/react';

import Input from './Input'

describe('Input', () => {
  beforeEach(() => {
    cleanup()
  })

  test('Should render input', async () => {
    render (
      <Input
        id='test'
        name='test'
        placeholder='text placeholder'
        value='value'
        label='test label'
        required={true}
      />
    );

    const label = screen.getByText('test label')
    const input = screen.getByPlaceholderText('text placeholder')

    expect(input.value).toBe('value')
    expect(input.id).toBe('test')
    expect(input.name).toBe('test')
    expect(input.required).toBeTruthy()
    expect(label).toBeInTheDocument()
  });

  test('Should render input without label and some input attributes', async () => {
    render (
      <Input
        placeholder='text placeholder'
        value='value'
      />
    );

    const input = screen.getByPlaceholderText('text placeholder')

    expect(screen.queryByText('test label')).not.toBeInTheDocument()
    expect(input.id).not.toBe('test')
    expect(input.name).not.toBe('test')
    expect(input.required).not.toBeTruthy()
  });
});
