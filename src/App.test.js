import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('app component', () => {
  test('display title', () => {
    render(<App />);
    expect(screen.getByText(/Images/i)).toBeInTheDocument();
  });

  test('display images', async () => {
    render(<App />);

    await waitFor(() => {
      const image = screen.queryAllByTestId('image-element');
      expect(image).toHaveLength(30);
    });
  });
});
