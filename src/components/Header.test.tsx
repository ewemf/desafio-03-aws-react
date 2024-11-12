import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { getAuth } from 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
}));

describe('Header Component', () => {
  const mockUnsubscribe = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Header component with login button when user is not logged in', () => {
    (getAuth as jest.Mock).mockReturnValue({
      onAuthStateChanged: jest.fn((callback) => {
        callback(null);
        return mockUnsubscribe;
      }),
    });

    render(
      <Router>
        <Header />
      </Router>
    );

    const loginButton = screen.getByText('Entrar');
    expect(loginButton).toBeInTheDocument();
  });

  it('renders the Header component with profile image and logout button when user is logged in', () => {
    (getAuth as jest.Mock).mockReturnValue({
      onAuthStateChanged: jest.fn((callback) => {
        callback({ photoURL: 'http://example.com/photo.jpg' });
        return mockUnsubscribe;
      }),
    });

    render(
      <Router>
        <Header />
      </Router>
    );

    const logoutButton = screen.getByText('Sair');
    const profileImage = screen.getByAltText('Foto de perfil');
    expect(logoutButton).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', 'http://example.com/photo.jpg');
  });
});