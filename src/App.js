import './App.sass';
import Layout from './components/Layout/layout';
import Home from './components/Home/home';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/about';
import Contact from './components/Contact/contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={< Layout />}>
          <Route index element={< Home />}></Route>
          <Route path='/about' element={< About />}></Route>
          <Route path="/contact" element={< Contact />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
