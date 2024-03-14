import React from 'react';
import { render } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('renders without crashing', () => {
    const { container } = render(<HeroSection />);
    expect(container).toBeInTheDocument();
  });
});
