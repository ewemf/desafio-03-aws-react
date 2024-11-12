import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experiences from './Experiences';

jest.mock('../components/ExpModal', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ isOpen, onSave, onClose, exp }: { isOpen: boolean, onSave: (exp: any) => void, onClose: () => void, exp: any }) => {
    return isOpen ? (
      <div data-testid="exp-modal">
        <button onClick={() => onSave(exp || { title: 'New Experience', period: '2023', technologies: ['React'], description: 'Test Description' })}>
          Save Experience
        </button>
        <button onClick={onClose}>Close Modal</button>
      </div>
    ) : null;
  },
}));

describe('Experiences Component', () => {
  const mockExperiences = [
    {
      title: 'Developer',
      period: '2020-2021',
      technologies: ['JavaScript', 'React'],
      description: 'Worked on frontend development',
    },
  ];

  const mockOnDelete = jest.fn();
  const mockOnSave = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it('renders all mandatory fields of an experience when not in editing mode', () => {
    render(<Experiences experiences={mockExperiences} isEditing={false} onDelete={mockOnDelete} onSave={mockOnSave} />);
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getByText('2020-2021')).toBeInTheDocument();
    expect(screen.getByText('Worked on frontend development')).toBeInTheDocument();
  });

  it('renders "Add Card" button in editing mode', () => {
    render(<Experiences experiences={mockExperiences} isEditing={true} onDelete={mockOnDelete} onSave={mockOnSave} />);
    const addCardButton = screen.getByText('Adicionar card');
    expect(addCardButton).toBeInTheDocument();
  });

  it('opens the modal when "Add Card" button is clicked in editing mode', () => {
    render(<Experiences experiences={mockExperiences} isEditing={true} onDelete={mockOnDelete} onSave={mockOnSave} />);
    const addCardButton = screen.getByText('Adicionar card');
    fireEvent.click(addCardButton);
    expect(screen.getByTestId('exp-modal')).toBeInTheDocument();
  });

  it('saves a new experience when save button in modal is clicked', () => {
    render(<Experiences experiences={mockExperiences} isEditing={true} onDelete={mockOnDelete} onSave={mockOnSave} />);
    const addCardButton = screen.getByText('Adicionar card');
    fireEvent.click(addCardButton);

    const saveButton = screen.getByText('Save Experience');
    fireEvent.click(saveButton);

    expect(mockOnSave).toHaveBeenCalledWith(
      { title: 'New Experience', period: '2023', technologies: ['React'], description: 'Test Description' },
      null
    );
  });

  it('deletes an experience when delete icon is clicked in editing mode', () => {
    const mockOnDelete = jest.fn();
    render(<Experiences experiences={[{ title: 'Developer', period: '2021-2022', technologies: ['React'], description: 'Developed a project' }]} isEditing={true} onDelete={mockOnDelete} onSave={() => {}} />);

    const deleteButton = screen.getByTestId('delete-button-0');
    fireEvent.click(deleteButton);
  
    expect(mockOnDelete).toHaveBeenCalledWith(0);
  });

  it('stores experiences in localStorage on load', () => {
    render(<Experiences experiences={mockExperiences} isEditing={false} onDelete={mockOnDelete} onSave={mockOnSave} />);
    const storedExperiences = JSON.parse(localStorage.getItem('experiences') || '[]');
    expect(storedExperiences).toEqual(mockExperiences);
  });
});