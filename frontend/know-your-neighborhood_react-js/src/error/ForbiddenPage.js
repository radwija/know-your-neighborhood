import React from 'react'
import { Link } from 'react-router-dom';

export default function ForbiddenPage() {
    return (
        <div className='heading'>
            <h1>Forbidden | 403</h1>
            <Link to={"/"} className='btn btn-dark'>Go to home</Link>
        </div>
    )
}
