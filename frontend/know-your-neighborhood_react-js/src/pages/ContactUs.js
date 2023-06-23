import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { ACCESS_TOKEN } from '../constants';
import { API_BASE_URL } from '../constants';

export default function ContactUs() {
    let navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: "",
        phone: ""
    });

    const { name, email, message, phone } = contact;

    const onReset = () => {
        setContact({
            name: "",
            email: "",
            message: "",
            phone: ""
        });
    };


    const onInputChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`${API_BASE_URL}/contact/save-contact`, contact);

        navigate("/contact");
    };

    return (
        <div>
            <div className='heading'>
                <h1>Contact Us</h1>
            </div>
            <form onSubmit={(e) => onSubmit(e)
                .then(Response => {
                    alert("Message sent successfully!")
                    onReset();
                }).catch(error => {
                    alert("Oops! Something went wrong. Please try again!")
                })
            } className="row g-3">
                <div className="col-md-12">
                    <label for="name" className="form-label">Your Name</label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your name"
                        name="name"
                        value={name}
                        onChange={(e) => onInputChange(e)} required />
                </div>
                <div className="col-md-12">
                    <label for="phone" className="form-label">Phone</label>
                    <input
                        type={"number"}
                        className="form-control"
                        placeholder="Enter phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => onInputChange(e)} required />
                </div>
                <div className="col-md-12">
                    <label for="email" className="form-label">Email</label>
                    <input
                        type={"email"}
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)} required />
                </div>
                <div className="col-md-12">
                    <label for="message" className="form-label">Message</label>
                    <textarea
                        type={"text"}
                        className="form-control"
                        placeholder="Your message..."
                        name="message"
                        value={message}
                        style={{ minHeight: "150px" }}
                        onChange={(e) => onInputChange(e)} required />
                </div>
                <div className="col-12">
                    <button type='submit' className='btn btn-primary' >Submit</button>
                </div>
            </form>
        </div>
    )
}
