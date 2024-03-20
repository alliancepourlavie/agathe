import { Routes, Route } from 'react-router-dom';
import ENGB from './pages/en/en-GB';
import SWSW from './pages/sw/sw-SW';
import SWdessin from './pages/sw/sw-SW-dessin';


const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" index element={<SWSW />} />
           <Route path="/sw-SW" element={<SWSW />} />
           <Route path="/sw-SW-dessin" element={<SWdessin />} />
           <Route path="/en-GB" element={<ENGB />} />
        </Routes>
     </>
  );
 };
 
 export default App;