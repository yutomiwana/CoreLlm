// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoreLlmPulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoreLlmPulse/i);
    expect(titleElement).toBeInTheDocument();
});
