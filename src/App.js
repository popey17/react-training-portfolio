import './App.sass';
import Layout from './components/Layout/layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={< Layout />}></Route>
        <Route path="/about" element={< Layout />}></Route>
        <Route path="/contact" element={< Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;
