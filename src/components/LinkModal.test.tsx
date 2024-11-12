import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LinkModal from './LinkModal';

describe('LinkModal Component', () => {
  const mockOnClose = jest.fn();
  const mockOnSave = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('does not render the modal when isOpen is false', () => {
    render(
      <LinkModal isOpen={false} initialUrl="http://example.com" onClose={mockOnClose} onSave={mockOnSave} />
    );

    expect(screen.queryByText('Adicionar link')).not.toBeInTheDocument();
  });

  it('renders the modal with initial URL when isOpen is true', () => {
    render(
      <LinkModal isOpen={true} initialUrl="http://example.com" onClose={mockOnClose} onSave={mockOnSave} />
    );

    const input = screen.getByPlaceholderText('Digite a URL') as HTMLInputElement;
    expect(screen.getByText('Adicionar link')).toBeInTheDocument();
    expect(input.value).toBe('http://example.com');
  });

  it('updates the URL when user types in the input field', () => {
    render(
      <LinkModal isOpen={true} initialUrl="" onClose={mockOnClose} onSave={mockOnSave} />
    );

    const input = screen.getByPlaceholderText('Digite a URL') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'http://new-url.com' } });
    expect(input.value).toBe('http://new-url.com');
  });

  it('calls onClose when the "Cancelar" button is clicked', () => {
    render(
      <LinkModal isOpen={true} initialUrl="" onClose={mockOnClose} onSave={mockOnSave} />
    );

    const cancelButton = screen.getByText('Cancelar');
    fireEvent.click(cancelButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onSave with the URL and onClose when the "Salvar" button is clicked', () => {
    render(
      <LinkModal isOpen={true} initialUrl="http://example.com" onClose={mockOnClose} onSave={mockOnSave} />
    );

    const saveButton = screen.getByText('Salvar');
    fireEvent.click(saveButton);

    expect(mockOnSave).toHaveBeenCalledWith('http://example.com');
    expect(mockOnClose).toHaveBeenCalled();
  });
});
