import { screen, render } from '@testing-library/react'

import IndexPage from '../../pages/index'

describe('IndexPage', () => {
  test('render home', async () => {
    render(<IndexPage />)

    expect(
      screen.getByRole('heading', { name: 'Welcome to Next.js!' })
    ).toBeInTheDocument()
  })
})
