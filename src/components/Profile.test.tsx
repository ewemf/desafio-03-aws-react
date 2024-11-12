import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from './Profile';

describe('Profile Component', () => {
  const mockUserData = {
    login: 'fulano',
    avatar_url: 'avatar-url.png',
    html_url: 'https://github.com/fulano',
    linkedin_url: 'https://linkedin.com/in/fulano',
    name: 'Fulano',
    email: 'fulano@example.com',
    location: 'Brazil',
    bio: 'Software developer',
  };

  const mockOnEditChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it('renders the profile information correctly', () => {
    render(<Profile userData={mockUserData} isEditing={false} onEditChange={mockOnEditChange} />);

    expect(screen.getByText('fulano')).toBeInTheDocument();
    expect(screen.getByText('Brazil')).toBeInTheDocument();
    expect(screen.getByText('fulano@example.com')).toBeInTheDocument();
    expect(screen.getByText('Software developer')).toBeInTheDocument();
  });

  it('allows editing the name when isEditing is true', () => {
    render(<Profile userData={mockUserData} isEditing={true} onEditChange={mockOnEditChange} />);

    const nameInput = screen.getByDisplayValue('Fulano') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Fulano Silva' } });

    expect(nameInput.value).toBe('Fulano Silva');
    expect(mockOnEditChange).toHaveBeenCalledWith('name', 'Fulano Silva');
  });

  it('opens the LinkModal when LinkedIn button is clicked in edit mode', () => {
    render(<Profile userData={mockUserData} isEditing={true} onEditChange={mockOnEditChange} />);

    const linkedinButton = screen.getByText('LinkedIn');
    fireEvent.click(linkedinButton);

    expect(screen.getByText('Adicionar link')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite a URL')).toHaveValue(mockUserData.linkedin_url);
  });

  it('saves LinkedIn URL when save button is clicked in LinkModal', () => {
    render(<Profile userData={mockUserData} isEditing={true} onEditChange={mockOnEditChange} />);

    const linkedinButton = screen.getByText('LinkedIn');
    fireEvent.click(linkedinButton);

    const urlInput = screen.getByPlaceholderText('Digite a URL') as HTMLInputElement;
    fireEvent.change(urlInput, { target: { value: 'https://linkedin.com/in/novo-fulano' } });

    const saveButton = screen.getByText('Salvar');
    fireEvent.click(saveButton);

    expect(mockOnEditChange).toHaveBeenCalledWith('linkedin_url', 'https://linkedin.com/in/novo-fulano');
    expect(localStorage.getItem('linkedinUrl')).toBe('https://linkedin.com/in/novo-fulano');
  });

  it('closes the LinkModal when the cancel button is clicked', () => {
    render(<Profile userData={mockUserData} isEditing={true} onEditChange={mockOnEditChange} />);

    const linkedinButton = screen.getByText('LinkedIn');
    fireEvent.click(linkedinButton);

    const cancelButton = screen.getByText('Cancelar');
    fireEvent.click(cancelButton);

    expect(screen.queryByText('Adicionar link')).not.toBeInTheDocument();
  });
});