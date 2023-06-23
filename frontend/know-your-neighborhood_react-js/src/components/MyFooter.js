import React from 'react'
import { Link } from 'react-router-dom'

export default function MyFooter() {
    return (
        <footer className='footer'>
            <div>
                <div className='row text-center'>
                    <div className='col'>
                        {/* <div className='title'>About Us</div> */}
                        <Link to="/about">About Us</Link>
                    </div>
                    <div className='col'>
                        {/* <div className='title'>Terms and Condition</div> */}
                        <Link to="/terms-and-conditions">Terms and Conditions</Link>
                    </div>
                    <div className='col'>
                        {/* <div className='title'>Contact Us</div> */}
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className='copyright'>Copyright © 2023 | Know Your Neighborhood</div>
        </footer>
    )
}
