import React from 'react';
import Header from '../components/Header';
import BooksAndAuthors from '../components/BooksAndAuthors';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyLibrary = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <BooksAndAuthors />
        </div>
    );
}

export default MyLibrary;