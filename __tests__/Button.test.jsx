import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../src/components/Button';

describe('Button', () => {
  test('affiche le texte correctement', () => {
    render(<Button>Valider</Button>);
    expect(screen.getByText(/Valider/i)).toBeInTheDocument();
  });

  test('déclenche un événement au clic', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clique</Button>);
    fireEvent.click(screen.getByText(/Clique/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
