import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Square from '../features/square'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Square value={'X'} onClick={() => console.log('click')} />)

        const element = screen.getByTestId('square')

        const value = 'X'

        expect(element).toHaveTextContent(value)
    })
})
