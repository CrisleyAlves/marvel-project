import {
  cleanup,
  fireEvent,
  render,
  screen
} from '@testing-library/react';

import RouterWrapper from '../../tests/RouterWrapper';

import Modal from './Modal'

describe('Modal', () => {
  beforeEach(() => cleanup())

  test('Should render modal with any content', async () => {
    render (
      <RouterWrapper>
        <Modal showModal={true} title="Dummy modal title">
          dummy content
        </Modal>
      </RouterWrapper>
    );

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Dummy modal title')).toBeInTheDocument()
    expect(screen.getByText('dummy content')).toBeInTheDocument()
  });

  test('Should not show modal when showModal flag is false', async () => {
    const onClickCloseModal = jest.fn(() => {});

    render (
      <RouterWrapper>
        <Modal showModal={false} onClickCloseModal={onClickCloseModal}>
          dummy content
        </Modal>
      </RouterWrapper>
    );

    expect(screen.queryByText('dummy content')).not.toBeInTheDocument()
  });

  test('Should call onClickCloseModal function when trying to close modal', async () => {
    const onClickCloseModal = jest.fn(() => {});

    render (
      <RouterWrapper>
        <Modal showModal={true} onClickCloseModal={onClickCloseModal}>
          dummy content
        </Modal>
      </RouterWrapper>
    );

    const closeModalButton = screen.getByText('X');
    fireEvent.click(closeModalButton)

    expect(onClickCloseModal).toBeCalledTimes(1)
  });
});
