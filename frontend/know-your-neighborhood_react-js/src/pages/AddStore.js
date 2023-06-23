import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { ACCESS_TOKEN } from '../constants';
import { API_BASE_URL } from '../constants';

export default function SaveStore() {
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
    await axios.post(`${API_BASE_URL}/store/save-store`, store, headers);
    navigate("/");
  };

  return (
    <div>
      <div className='heading'>
        <h1>Add Store</h1>
        <Link to={"/"} className='btn btn-dark'><i className="bi bi-x-circle"></i> Cancel</Link>
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
          <button type='submit' className='btn btn-primary' >Submit</button>
        </div>
      </form>
    </div>
  )
}
