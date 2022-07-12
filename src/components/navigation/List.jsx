import React from 'react'
import './styles/nav.css'

const List = () => {
    return(
        <>
            <nav>
                <ul className="nav-item">
                    <li className="nav-lists">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="nav-links" href="#">Home</a>
                    </li>
                    <li className="nav-lists">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="nav-links" href="#">Place</a>
                    </li>
                    <li className="nav-lists">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="nav-links" href="#">About</a>
                    </li>
                    <li className="nav-lists">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="nav-links" href="#">Location</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default List;