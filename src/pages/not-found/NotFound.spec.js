import { cleanup, render, screen } from '@testing-library/react';
import RouterWrapper from '../../tests/RouterWrapper';

import NotFound from './NotFound'

describe('NotFound', () => {
  beforeEach(cleanup)

  test('Should show not found image when reaching a route that does not exist', () => {
    render (
      <RouterWrapper>
        <NotFound />
      </RouterWrapper>
    );

    const notFoundImage = screen.getByRole('img')
    expect(notFoundImage).toHaveAttribute('src', 'not_found.jpg')
    expect(notFoundImage).toHaveAttribute('title', 'Not found')
    expect(notFoundImage).toHaveAttribute('alt', 'Not found')
  });
});
