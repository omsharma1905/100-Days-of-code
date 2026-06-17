import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      {/* 
        Helmet is used to manage the document head.
        Anything inside Helmet will be added to the <head> section
        of the HTML document.
      */}
      <Helmet>
        {/* Sets the browser tab title dynamically */}
        <title>{import.meta.env.VITE_SITE_TITLE}</title>

        {/* Adds a meta description tag for SEO */}
        <meta
          name="description"
          content="A simple React Helmet and .env demo."
        />
      </Helmet>

      {/* Displaying the site title from the .env file */}
      <h1>{import.meta.env.VITE_SITE_TITLE}</h1>

      {/* Normal page content */}
      <p>
        This is a minimal example using environment variables and React Helmet.
      </p>
    </div>
  );
}

export default App;
