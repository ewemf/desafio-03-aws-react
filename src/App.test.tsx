import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Initial from '../src/pages/Initial';
import Portfolio from '../src/pages/Portfolio';

describe('App Component', () => {
  it('should render the Initial component for the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Initial />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Digite o nome do usuário que deseja buscar')).toBeInTheDocument();
  });

  it('should render the Portfolio component for the /portfolio route', () => {
    render(
      <MemoryRouter initialEntries={['/portfolio']}>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });
});
