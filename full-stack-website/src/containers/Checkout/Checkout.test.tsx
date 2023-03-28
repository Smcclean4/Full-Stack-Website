import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import Checkout from './Checkout'
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios'
import { UserEmailInfoInterface } from './Checkout';

jest.mock('axios')

describe('creating tests for checkout container', () => {
  const exampleUserEmailInfo = {
    firstname: 'test',
    country: 'USA',
    city: 'Compton',
    state: 'California',
    zip: '90220',
    email: 'test@test.com'
  }

  const exampleUserEmailInfoInterface = {
    firstname: expect.any(String),
    country: expect.any(String),
    city: expect.any(String),
    state: expect.any(String),
    zip: expect.any(String),
    email: expect.any(String)
  }

  test('making sure that checkout renders', () => {
    const { getByTestId } = render(<Checkout />, { wrapper: MemoryRouter })
    let checkoutTest = getByTestId('Checkout')
    expect(checkoutTest).toBeDefined();
  })

  test('make sure that cart button renders', () => {
    const { getByTestId } = render(<Checkout />, { wrapper: MemoryRouter })
    let cartButton = getByTestId('cart-button-test')
    expect(cartButton).toBeInTheDocument();
    expect(cartButton).toBeDefined();
  })

  test('makes sure that sendEmail is being correctly used', async () => {
    const { getByTestId } = render(<Checkout />, { wrapper: MemoryRouter })

    const form = getByTestId('send-email')

    fireEvent.change(getByTestId('firstname-input'), {
      target: { value: exampleUserEmailInfo.firstname }
    })

    fireEvent.change(getByTestId('country-input'), {
      target: { value: exampleUserEmailInfo.country }
    })

    fireEvent.change(getByTestId('city-input'), {
      target: { value: exampleUserEmailInfo.city }
    })

    fireEvent.change(getByTestId('state-input'), {
      target: { value: exampleUserEmailInfo.state }
    })

    fireEvent.change(getByTestId('zip-input'), {
      target: { value: exampleUserEmailInfo.zip }
    })

    fireEvent.change(getByTestId('email-input'), {
      target: { value: exampleUserEmailInfo.email }
    })

    fireEvent.submit(form);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(`http://localhost:${process.env.REACT_APP_PORT}/sendEmail`, exampleUserEmailInfo)
    })
  })

  test('testing to see if info that is being submitted is adhering to user email info interface', () => {
    expect(exampleUserEmailInfo).toMatchObject<UserEmailInfoInterface>(exampleUserEmailInfoInterface)
  })
})