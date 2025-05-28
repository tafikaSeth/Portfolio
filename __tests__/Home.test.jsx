import { render, screen } from '@testing-library/react';
import Home from '../src/pages/Home';

describe('Page d\'accueil', () => {
  test('affiche le titre principal', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Bienvenue/i })).toBeInTheDocument();
  });
});
