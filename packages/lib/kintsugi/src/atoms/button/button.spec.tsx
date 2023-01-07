import { render, screen } from '@testing-library/react';

import { Button } from '../button';

describe('Button component', () => {
  it('should render successfully', () => {
    render(<Button />);
    const buttonElement = screen.getByTestId('buttonTestId');
    expect(buttonElement).toBeInTheDocument();
  });
});
