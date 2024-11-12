import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';

jest.mock('../imgs/b&w/instaBeW.svg', () => 'test-file-stub');
jest.mock('../imgs/insta.svg', () => 'test-file-stub');
jest.mock('../imgs/edit-icon.svg', () => 'test-file-stub');
jest.mock('../components/LinkModal', () => ({
  __esModule: true,
  default: ({ isOpen, onSave }: { isOpen: boolean; onSave: (url: string) => void }) => {
    return isOpen ? (
      <div data-testid="link-modal">
        <button onClick={() => onSave('https://new-link.com')}>Save Link</button>
      </div>
    ) : null;
  },
}));

describe('Contact Component', () => {
  it('renders additional email input when in editing mode', () => {
    render(<Contact isEditing={true} additionalEmail="" setAdditionalEmail={() => {}} />);
    const input = screen.getByPlaceholderText('Adicione um email adicional');
    expect(input).toBeInTheDocument();
  });

  it('renders additional email as text when not in editing mode', () => {
    render(<Contact isEditing={false} additionalEmail="example@example.com" setAdditionalEmail={() => {}} />);
    const emailText = screen.getByText('example@example.com');
    expect(emailText).toBeInTheDocument();
  });

  it('opens the modal when a social icon is clicked in editing mode', () => {
    render(<Contact isEditing={true} additionalEmail="" setAdditionalEmail={() => {}} />);
    const instagramIcon = screen.getByAltText('Instagram B&W').closest('div');
    fireEvent.click(instagramIcon!);
    const modal = screen.getByTestId('link-modal');
    expect(modal).toBeInTheDocument();
  });

  it('calls setAdditionalEmail when email input value changes', () => {
    const mockSetAdditionalEmail = jest.fn();
    render(<Contact isEditing={true} additionalEmail="" setAdditionalEmail={mockSetAdditionalEmail} />);
    const input = screen.getByPlaceholderText('Adicione um email adicional');
    fireEvent.change(input, { target: { value: 'new@example.com' } });
    expect(mockSetAdditionalEmail).toHaveBeenCalledWith('new@example.com');
  });

  it('saves a new link when save button in modal is clicked', () => {
    render(<Contact isEditing={true} additionalEmail="" setAdditionalEmail={() => {}} />);
    const instagramIcon = screen.getByAltText('Instagram B&W').closest('div');
    fireEvent.click(instagramIcon!);

    const saveButton = screen.getByText('Save Link');
    fireEvent.click(saveButton);

    const savedLinks = JSON.parse(localStorage.getItem('socialLinks') || '{}');
    expect(savedLinks.instagram).toBe('https://new-link.com');
  });
});