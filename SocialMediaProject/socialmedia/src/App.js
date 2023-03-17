import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './pages/main';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main></Main>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
  