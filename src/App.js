import './App.sass';
import Layout from './components/Layout/layout';
import Home from './components/Home/home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={< Layout />}>
          <Route index element={< Home />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
