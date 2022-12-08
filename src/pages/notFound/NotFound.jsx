import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <section>
      <div className='container notfound__container'>
        <h2>Page Not Found</h2>
        <Link to='/' className='btn'>Hem</Link>
      </div>
    </section>
  )
}

export default NotFound