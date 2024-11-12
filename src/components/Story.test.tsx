import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Story from './Story';

describe('Story Component', () => {
  const mockOnEditChange = jest.fn();

  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the initial story correctly', () => {
    render(
      <Story
        initialStory="Esta é a minha história inicial."
        isEditing={false}
        onEditChange={mockOnEditChange}
      />
    );

    expect(screen.getByText('Esta é a minha história inicial.')).toBeInTheDocument();
  });

  it('allows editing the story when isEditing is true', () => {
    render(
      <Story
        initialStory="Minha história editável."
        isEditing={true}
        onEditChange={mockOnEditChange}
      />
    );

    const textarea = screen.getByPlaceholderText('Adicione sua história');
    expect(textarea).toBeInTheDocument();
    fireEvent.change(textarea, { target: { value: 'Minha nova história.' } });

    expect(textarea).toHaveValue('Minha nova história.');
    expect(mockOnEditChange).toHaveBeenCalledWith('Minha nova história.');
  });

  it('saves the story to localStorage when edited', () => {
    render(
      <Story
        initialStory="História para salvar."
        isEditing={true}
        onEditChange={mockOnEditChange}
      />
    );

    const textarea = screen.getByPlaceholderText('Adicione sua história');
    fireEvent.change(textarea, { target: { value: 'Minha história salva no localStorage.' } });

    expect(localStorage.getItem('userStory')).toBe('Minha história salva no localStorage.');
  });

  it('displays a default message when there is no story', () => {
    render(<Story initialStory="" isEditing={false} onEditChange={mockOnEditChange} />);

    expect(screen.getByText('Não há nenhuma história pra contar!')).toBeInTheDocument();
  });
});
