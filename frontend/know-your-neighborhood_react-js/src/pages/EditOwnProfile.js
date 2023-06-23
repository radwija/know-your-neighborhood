import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom'

import { ACCESS_TOKEN } from '../constants';
import { API_BASE_URL } from '../constants';
import { error } from 'jquery';
export default function EditUserProfile(props) {
    const { data } = props;
    const { currentUser } = data;
    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        city: "",
        country: "",
    });

    const { name, username, email, phone, city, country } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (!token) {
            navigate('/login')
            return;
        }

        const headers = {
            headers: {
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
        };
        await axios.put(`${API_BASE_URL}/user/update`, user, headers);
        navigate("/profile");
    };


    useEffect(() => {
        loadUserDetail();
    }, [currentUser.id]);

    const loadUserDetail = async () => {
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
        const result = await axios.get(`${API_BASE_URL}/user/details/${currentUser.id}`, headers);
        setUser(result.data);
    }


    return (
        <div>
            <div className='heading'>
                <h1>Updating Your Profile</h1>
                <Link to={"/profile"} className='btn btn-dark'><i className="bi bi-x-circle"></i> Cancel</Link>
            </div>
            <form onSubmit={(e) =>
                onSubmit(e)
                    .then(Response => {
                        alert("Profile updated successfully")
                    }).catch(error => {
                        alert("Oops! Something went wrong. Please try again!")
                    })
            } className="row g-3">
                <div className="col-md-12">
                    <label for="name" className="form-label">Fullname</label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter fullname"
                        name="name"
                        value={name}
                        onChange={(e) => onInputChange(e)} required />
                </div>
                <div className="col-md-12">
                    <label for="username" className="form-label">Username</label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter username"
                        name="username"
                        value={username}
                        onChange={(e) => onInputChange(e)} required />
                </div>
                <div className="col-md-12">
                    <label for="email" className="form-label">Email</label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)} required />
                </div>
                <div className="col-md-12">
                    <label for="phone" className="form-label">Phone</label>
                    <input
                        type={"number"}
                        className="form-control"
                        placeholder="Enter your hone"
                        name="phone"
                        value={phone}
                        onChange={(e) => onInputChange(e)} required />
                </div>
                <div className="col-md-12">
                    <label for="city" className="form-label">City</label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your city"
                        name="city"
                        value={city}
                        onChange={(e) => onInputChange(e)} required />
                </div>
                <div className="col-md-12">
                    <label for="country" className="form-label">Country</label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your country"
                        name="country"
                        value={country}
                        onChange={(e) => onInputChange(e)} required />
                </div>
                <div className="col-12">
                    <button type='submit' className='btn btn-primary' >Save changes</button>
                </div>
            </form>
        </div>
    )
}
