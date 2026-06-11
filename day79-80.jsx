import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <title>{import.meta.env.VITE_SITE_TITLE}</title>
        <meta name="description" content="A simple React Helmet and .env demo." />
      </Helmet>

      <h1>{import.meta.env.VITE_SITE_TITLE}</h1>
      <p>This is a minimal example using environment variables and React Helmet.</p>
    </div>
  );
}

export default App;



// VITE_SITE_TITLE=My React App [In a another file with .env extension]