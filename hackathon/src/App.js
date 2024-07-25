import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Memory from './pages/Memory';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/memory' element={<Memory/>}/>
    </Routes>
  );
}

export default App;
