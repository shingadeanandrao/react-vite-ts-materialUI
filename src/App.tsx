import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotFound, Home } from './pages';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
