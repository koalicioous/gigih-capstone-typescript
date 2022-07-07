import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import { Provider } from 'react-redux'
import store from '../store/FoodStore/index'

describe('Home', () => {
  test('page rendered', () => {
    render(
      <Provider store={store}>
        <Home/>
      </Provider>
    );
    const banner = screen.getByTestId('banner-image');
    const heading = screen.getByText('Donasi Terbaru');
    expect(heading).toBeInTheDocument();
    expect(banner).toBeInTheDocument();
  })
})