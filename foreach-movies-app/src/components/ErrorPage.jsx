import React from 'react';


/**
 * ErrorPage component.
 *
 * @returns {JSX.Element} The rendered ErrorPage component.
 */
const ErrorPage = () => {
  return (
    <main>
      <div className='main oups'>
        <h1>404</h1>
        <img src='/404.gif' alt='404' />
      </div>
    </main>
  );
};

export default ErrorPage;
