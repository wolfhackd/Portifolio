import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} index />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
