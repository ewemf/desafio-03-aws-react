import { render, screen, fireEvent } from '@testing-library/react';
import ExpModal from './ExpModal';
import '@testing-library/jest-dom';

describe('ExpModal Component', () => {
  const mockOnClose = jest.fn();
  const mockOnSave = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the modal when isOpen is true', () => {
    render(<ExpModal isOpen={true} exp={null} onClose={mockOnClose} onSave={mockOnSave} />);
    expect(screen.getByText('Criação de card')).toBeInTheDocument();
  });

  it('does not render the modal when isOpen is false', () => {
    render(<ExpModal isOpen={false} exp={null} onClose={mockOnClose} onSave={mockOnSave} />);
    expect(screen.queryByText('Criação de card')).not.toBeInTheDocument();
  });

  it('disables the save button if required fields are empty', () => {
    render(<ExpModal isOpen={true} exp={null} onClose={mockOnClose} onSave={mockOnSave} />);
    const saveButton = screen.getByRole('button', { name: /salvar/i });
    expect(saveButton).toBeDisabled();
  });

  it('enables the save button when all required fields are filled', () => {
    render(<ExpModal isOpen={true} exp={null} onClose={mockOnClose} onSave={mockOnSave} />);
    fireEvent.change(screen.getByPlaceholderText('Título'), { target: { value: 'Developer' } });
    fireEvent.change(screen.getByPlaceholderText('Período de atuação'), { target: { value: '2020-2021' } });
    fireEvent.change(screen.getByPlaceholderText('Habilidades (separadas por vírgula)'), { target: { value: 'React, JavaScript' } });
    fireEvent.change(screen.getByPlaceholderText('Descreva a sua experiência'), { target: { value: 'Worked on a project' } });
    expect(screen.getByRole('button', { name: /salvar/i })).not.toBeDisabled();
  });

  it('calls onClose when cancel button is clicked', () => {
    render(<ExpModal isOpen={true} exp={null} onClose={mockOnClose} onSave={mockOnSave} />);
    fireEvent.click(screen.getByText('Cancelar'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});