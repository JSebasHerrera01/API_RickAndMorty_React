// RickAndMortyFooter.js
import React from 'react';

export const RickAndMortyFooter = () => {

  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
      <p className='text-muted'>
        Data provided by{' '}
        <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">
          Rick and Morty API
        </a>
      </p>
      <p className='text-muted'>API Status: <p className='text-success'>Operational</p></p>
    </footer>
  );
};



