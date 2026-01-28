import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';
import { PERSONAL_INFO } from '../config/constants';

// Mock Framer Motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

describe('Hero Component', () => {
  it('renders the user name correctly', () => {
    render(<Hero />);
    
    // Check if the name from constants is displayed
    const nameElement = screen.getByText(PERSONAL_INFO.name);
    expect(nameElement).toBeDefined();
  });

  it('renders the tagline correctly', () => {
    render(<Hero />);
    
    const taglineElement = screen.getByText(PERSONAL_INFO.tagline);
    expect(taglineElement).toBeDefined();
  });
});
