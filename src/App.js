import Community from "./pages/Community";
import Services from "./pages/Services";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/community' element={<Community />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
