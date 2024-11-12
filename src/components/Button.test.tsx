import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  it('renders the Button component', () => {
    render(<Button isEditing={false} toggleEditMode={() => {}} />);

    const icon = screen.getByAltText('Edit Button');
    expect(icon).toBeInTheDocument();
  });

  it('displays the edit icon when isEditing is false', () => {
    render(<Button isEditing={false} toggleEditMode={() => {}} />);

    const icon = screen.getByAltText('Edit Button');
    expect(icon).toHaveAttribute('src', 'test-file-stub');
  });

  it('displays the done icon when isEditing is true', () => {
    render(<Button isEditing={true} toggleEditMode={() => {}} />);

    const icon = screen.getByAltText('Edit Button');
    expect(icon).toHaveAttribute('src', 'test-file-stub');
  });

  it('calls toggleEditMode when the button is clicked', () => {
    const toggleEditMode = jest.fn();

    render(<Button isEditing={false} toggleEditMode={toggleEditMode} />);

    const button = screen.getByAltText('Edit Button').closest('div');
    fireEvent.click(button!);

    expect(toggleEditMode).toHaveBeenCalledTimes(1);
  });
});
