import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Header.css';
import headerImage from '../assets/header.jpg';

const Header:React.FC = () => {
    return (
        <React.Fragment>
            <div className='row'>
                <div className='col'>
                    <h2>My Library</h2>
                </div>
            </div>
            <div className='row'>
                <div id='imageRow' className='col'>
                    <img src={String(headerImage)} alt="MyLibrary" className='img-fluid fluid' />
                    <figcaption className='text-right'>
                        <span>
                            photo by <a href="https://unsplash.com/@annahunko?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anna Hunko</a> on <a href="https://unsplash.com/s/photos/library?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
                        </span>
                    </figcaption>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;