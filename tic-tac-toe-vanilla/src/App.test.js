import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import App from './App'

test('Shows Hello World!', () => {
  render(<App />)
  
  expect(screen.getByText('Hello, World!')).toBeInTheDocument()
})