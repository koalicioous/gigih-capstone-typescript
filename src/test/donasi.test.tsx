import { render, screen } from '@testing-library/react'
import DonasiMakanan from '../pages/DonasiMakanan'
import userEvent from "@testing-library/user-event"

describe('Donasi Makanan', () => {
    test('page rendered', () => {
        render(
            <DonasiMakanan/>
        )
    })
    const [text] = screen.getAllByTestId('nama-makanan')
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(text).toHaveFocus()
    userEvent.tab()
})