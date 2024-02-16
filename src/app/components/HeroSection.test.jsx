import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection'; // Ajustez le chemin d'import selon votre structure de dossiers

describe('HeroSection', () => {
  test('renders the component correctly', () => {
    render(<HeroSection />);
    
    //test text
    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
    
    expect(screen.getByText("You'll never walk alone 🎶")).toBeInTheDocument();
    
  });
});
