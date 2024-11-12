import { render, screen, fireEvent } from '@testing-library/react';
import Initial from './Initial';
import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Initial Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    localStorage.setItem('users', JSON.stringify([{ login: 'user1', name: 'User One' }]));
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('renders input field and GitHub button', () => {
    render(
      <BrowserRouter>
        <Initial />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText('Digite o nome do usuário')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  test('updates input value when user types', () => {
    render(
      <BrowserRouter>
        <Initial />
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText('Digite o nome do usuário');
    fireEvent.change(input, { target: { value: 'User One' } });
    expect(input).toHaveValue('User One');
  });
});