import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <HashRouter>
         <HelmetProvider>
            <App>
            <Helmet>
               <meta name="description"
                  content="A mixed-media digital publication documenting knowledge, memories and challenges of artisanal fisherwomen from Lake Kivu, Democratic Republic of Congo" />
               <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
               <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
               <meta property="og:type" content="website" />
               <meta property="og:locale" content="en_RW" />
               <meta property="og:locale:alternate" content="fr_CD" />
               <meta property="og:locale:alternate" content="sw_CD" />
               <meta property="og:audio" content="https://www.youtube.com/watch?v=V9pPHvABy3w" />
               <meta property="og:video" content="https://www.alessandromusetta.com/geo/tiles/agathe/data/bagira_from_water.mp4" />
               <meta property="og:site_name" content="Agathe, the matriarch above the water" />
               <meta property="og:description"
                  content="A mixed-media digital publication documenting knowledge, memories and challenges of artisanal fisherwomen from Lake Kivu, Democratic Republic of Congo" />
               <meta property="og:image"
                  content="%PUBLIC_URL%/thumb.png" />
               <title>Agathe, the matriarch above the water</title>
               </Helmet>
            </App>
         </HelmetProvider>
      </HashRouter>
   </React.StrictMode>
);

reportWebVitals(console.log);
