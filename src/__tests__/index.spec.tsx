import { render, screen } from '@testing-library/react'
import { Home } from '../pages/index'
import { withProviders } from '../../test/withProviders'

it('renders about page', async () => {
  const Root = withProviders({
    Component: Home,
  })

  render(<Root  />)

  expect(screen.getByText('Discover and deploy boilerplate example Next.js projects.')).toBeInTheDocument();
})