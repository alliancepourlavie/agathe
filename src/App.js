import { Routes, Route } from 'react-router-dom';
import ENEN from './pages/en/en-GB';
import SWSW from './pages/sw/sw-SW';
import SWdessin from './pages/sw/sw-SW-dessin';
import SWcarte from './pages/sw/sw-SW-carte';
import ENdessin from './pages/en/en-GB-dessin';
import ENcarte from './pages/en/en-GB-carte';
import FRFR from './pages/fr/fr-CD';
import FRdessin from './pages/fr/fr-CD-dessin';
import FRcarte from './pages/fr/fr-CD-carte';


const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" index element={<SWSW />} />
           <Route path="/sw-SW" element={<SWSW />} />
           <Route path="/sw-SW-dessin" element={<SWdessin />} />
           <Route path="/sw-SW-carte" element={<SWcarte />} />
           <Route path="/en-GB" element={<ENEN />} />
           <Route path="/en-GB-dessin" element={<ENdessin />} />
           <Route path="/en-GB-carte" element={<ENcarte />} />
           <Route path="/fr-CD" element={<FRFR />} />
           <Route path="/fr-CD-dessin" element={<FRdessin />} />
           <Route path="/fr-CD-carte" element={<FRcarte />} />
        </Routes>
     </>
  );
 };
 
 export default App;