import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom'

import { ACCESS_TOKEN } from '../constants';
import { API_BASE_URL } from '../constants';
export default function EditUserStore() {
    let navigate = useNavigate();

    const [store, setStore] = useState({
        storeName: "",
        city: "",
        country: "",
        phone: ""
    });

    const { storeName, city, country, phone } = store;

    const onInputChange = (e) => {
        setStore({ ...store, [e.target.name]: e.target.value });
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
        await axios.put(`${API_BASE_URL}/admin/update-store/${cid}`, store, headers);
        navigate("/admin/stores");
    };

    const { cid } = useParams();

    useEffect(() => {
        loadUserDetail();
    }, [cid]);

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
        const result = await axios.get(`${API_BASE_URL}/store/viewStore?cid=${cid}`, headers);
        setStore(result.data);
    }


    return (
        <div>
            <div className='heading'>
                <h1>Update Store</h1>
                <h2>ID: {cid} | {storeName}</h2>
                <Link to={"/admin/stores"} className='btn btn-dark'><i className="bi bi-x-circle"></i> Cancel</Link>
            </div>
            <form onSubmit={(e) => onSubmit(e)} className="row g-3">
                <div className="col-md-12">
                    <label for="storeName" className="form-label">Store Name</label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter store name"
                        name="storeName"
                        value={storeName}
                        onChange={(e) => onInputChange(e)} required />
                </div>
                <div className="col-md-12">
                    <label for="city" className="form-label">City</label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter city"
                        name="city"
                        value={city}
                        onChange={(e) => onInputChange(e)} required />
                </div>
                <div className="col-md-12">
                    <label for="country" className="form-label">Country</label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter country"
                        name="country"
                        value={country}
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
                <div className="col-12">
                    <button type='submit' className='btn btn-primary' >Save changes</button>
                </div>
            </form>
        </div>
    )
}
