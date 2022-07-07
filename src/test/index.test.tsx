import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(
        <Home/>
    );
    const banner = screen.getAllByTestId('banner-image')
    const heading = screen.getByText('Donasi Terbaru');
    expect(heading).toBeInTheDocument()
    expect(banner).toBeInTheDocument()
  })
})