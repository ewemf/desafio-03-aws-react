import './App.css'
import Initial from './pages/Initial'
import Portfolio from './pages/Portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Initial />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
