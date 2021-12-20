import Error from "../Helper/Error";
import { render, screen } from '@testing-library/react';

describe('Error Component', () => {
  test('Deve iniciar vazio', () => {
    render(<Error />);
  });
});