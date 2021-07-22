import {render, screen, fireEvent} from '@testing-library/react'

import {Form} from './form'

beforeEach(() => {
  render(<Form />)
})

describe('form', () => {
  test('should contains a title', () => {
    const titleElement = screen.queryByText(/form/i)

    expect(titleElement).toBeInTheDocument()
  })

  test('should contain name and age inputs', () => {
    const nameInputEl = screen.queryByLabelText(/name/i)
    const ageInputEl = screen.queryByLabelText(/age/i)

    expect(nameInputEl).toBeInTheDocument()
    expect(ageInputEl).toBeInTheDocument()
  })

  test('should submit the form', () => {
    const nameInputEl = screen.queryByLabelText(/name/i)
    const ageInputEl = screen.queryByLabelText(/age/i)
    const submitBtn = screen.queryByRole('button', {name: /submit/i})

    fireEvent.change(nameInputEl, {target: {value: 'John Doe'}})
    fireEvent.change(ageInputEl, {target: {value: '20'}})

    fireEvent.click(submitBtn)

    const expectedMsg = screen.queryByText(/success/i)

    expect(expectedMsg).toBeInTheDocument()
  })

  test.todo('should submit the form and display the input values')
})
