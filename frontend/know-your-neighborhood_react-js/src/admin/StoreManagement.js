import React, { useEffect, useState } from 'react';
import { ACCESS_TOKEN } from '../constants';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../constants';

export default function StoreManagement() {
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);

  useEffect(() => {
    isAdmin();
    loadStores();
  }, []);

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
          navigate("/admin/users")
        }
      })
      .catch(error => {
        navigate("/forbidden");
      })
  }


  const loadStores = async () => {
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
    const result = await axios.get(`${API_BASE_URL}/store/stores`, headers)
    setStores(result.data);
  }

  const deleteStore = async (id) => {
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
    await axios.delete(`${API_BASE_URL}/admin/delete-store/${id}`, headers);
    loadStores();
  }
  const confirmDelete = (id, name) => {
    const isConfirm = window.confirm(`Are you sure you want to delete this store: ${name}?`);
    if (isConfirm) {
      deleteStore(id);
    }

  }
  return (
    <div>
      <div className='heading'>
        <h1>Store Management</h1>
      </div>
      <div className='cards'>
        <table id="example" className="table table-striped" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Store Name</th>
              <th>City</th>
              <th>Country</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              stores.map((store, index) => (
                <tr key={index}>
                  <td>{store.id}</td>
                  <td>{store.storeName}</td>
                  <td>{store.city}</td>
                  <td>{store.country}</td>
                  <td>{store.phone}</td>
                  <td>
                    <div className='d-flex'>
                      <Link to={`/viewStore/${store.id}`} className='btn btn-light mx-2'><i className="bi bi-eye-fill"></i> View</Link>
                      <Link to={`/admin/update-store/${store.id}`} className='btn btn-light mx-2'><i className="bi bi-pencil-square"></i> Edit</Link>
                      <button className='btn btn-danger mx-2' onClick={() => confirmDelete(store.id, store.storeName)}><i className="bi bi-trash3-fill"></i> Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
