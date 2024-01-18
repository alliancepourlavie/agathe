import { Routes, Route } from 'react-router-dom';
import ENGB from './pages/en/en-GB';
import SWSW from './pages/sw/sw-SW';


const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" index element={<SWSW />} />
           <Route path="/sw-SW" element={<SWSW />} />
           <Route path="/en-GB" element={<ENGB />} />
        </Routes>
     </>
  );
 };
 
 export default App;