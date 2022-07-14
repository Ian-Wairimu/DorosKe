import React from 'react'
import './style/Header.css'
import Flower from './images/flower.jpg'
import Venue from './images/venue.jpg'
import Wed from './images/weds.jpg'

const Header = () => {
    return (
        <>
            <div className="learn">
                <div className="grid-container">
                    <img src={Wed} alt="" className="grid-item-wed" />
                    <img src={Flower} alt="" className="grid-item-flower" />
                    <img src={Venue} alt="" className="grid-item-venue" />
                </div>
                <div className="learn-header">
                    <h2><span>Learn More </span> On What  We Offer</h2>
                    <div className="header-p">
                        <p className="h-p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        </p>
                        <button className="btn-header">Learn More</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;