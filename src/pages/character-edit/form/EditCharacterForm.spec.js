import {
  cleanup,
  fireEvent,
  render,
  screen
} from '@testing-library/react';

import RouterWrapper from '../../../tests/RouterWrapper';
import { createSpiderManCharacterMock } from '../../../tests/mocks/character';
import EditCharacterForm from './EditCharacterForm'

const spiderManCharacterMock = createSpiderManCharacterMock()

describe('EditCharacterForm', () => {
  beforeEach(() => {
    cleanup()
  })

  test('Should render EditCharacterForm with character name', async () => {
    render (
      <RouterWrapper>
        <EditCharacterForm character={spiderManCharacterMock} />
      </RouterWrapper>
    );

    const inputName = screen.getByPlaceholderText('')

    expect(inputName.value).toBe(spiderManCharacterMock.name)
  });

  test('Should call onchange field when updating input name', async () => {
    const onChangeField = jest.fn(() => {})

    render (
      <RouterWrapper>
        <EditCharacterForm character={spiderManCharacterMock} onChangeField={onChangeField} />
      </RouterWrapper>
    );

    const inputName = screen.getByPlaceholderText('')
    fireEvent.change(inputName, { target: { value: 'character name' } })

    expect(onChangeField).toBeCalledTimes(1)
  });

  test('Should call onSubmitEditCharacterForm when clicking on save button', async () => {
    const onSubmitEditCharacterForm = jest.fn().mockImplementation(event => event.preventDefault());
    
    render (
      <RouterWrapper>
        <EditCharacterForm character={spiderManCharacterMock} onSubmitEditCharacterForm={onSubmitEditCharacterForm} />
      </RouterWrapper>
    );

    const submitButton = screen.getByText('Save')
    fireEvent.click(submitButton);

    expect(onSubmitEditCharacterForm).toHaveBeenCalledTimes(1)
  });
});
