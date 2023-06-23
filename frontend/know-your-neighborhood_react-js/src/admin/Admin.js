import React, { useEffect } from 'react'
import { API_BASE_URL, ACCESS_TOKEN } from '../constants'
import { Link, useNavigate } from 'react-router-dom';

export default function Admin() {
    const navigate = useNavigate();
    const isAdmin = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        // Check token
        if (!token) {
            navigate('/login')
            return;
        }

        const headers = {
            headers: {
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
        };
        fetch(`${API_BASE_URL}/admin`, headers)
            .then(res => {
                if (!res.ok) {
                    if (res.status === 403) {
                        navigate("/forbidden");
                    }
                } else {
                    navigate("/admin/users");
                }
            })
            .catch(error => {
                navigate("/forbidden");
            })
    }
    useEffect(() => {
        console.log("welcome to admin")
        isAdmin();
    }, [])
    return (
        <div>
            <div className="heading">
                <h1>Welcome to Admin Page</h1>
            </div>
            <div className='row'>
                <div className='col'>
                    <Link to="/admin/users" className='btn btn-dark btn-lg w-100'><i className="bi bi-people"></i> User Management</Link>
                </div>
                <div className='col'>
                    <Link to="/admin/stores" className='btn btn-dark btn-lg w-100'><i className="bi bi-shop-window"></i> Store Management</Link>
                </div>
                <div className='col'>
                    <Link to="/admin/contacts" className='btn btn-dark btn-lg w-100'><i className="bi bi-chat-left-text"></i> Contact Management</Link>
                </div>
            </div>
        </div>
    );
}
