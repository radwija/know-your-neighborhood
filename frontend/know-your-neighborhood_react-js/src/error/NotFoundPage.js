import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className='heading'>
            <h1>Not Found | 404</h1>
            <Link to={"/"} className='btn btn-dark'>Go to home</Link>
        </div>
    )
}
