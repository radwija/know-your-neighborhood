import React, { useEffect, useState } from 'react';
import { ACCESS_TOKEN } from '../constants';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../constants';

export default function StoreManagement() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

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
    try {
      const result = await axios.get(`${API_BASE_URL}/admin/contacts`, headers)
      setContacts(result.data);
    } catch (error) {
      navigate("/forbidden");
    }
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
    await axios.delete(`${API_BASE_URL}/admin/delete-contact/${id}`, headers);
    loadStores();
  }
  const confirmDelete = (id, name) => {
    const isConfirm = window.confirm(`Are you sure you want to delete ${name}'s contact?`);
    if (isConfirm) {
      deleteStore(id);
    }
  }
  return (
    <div>
      <div className='heading'>
        <h1>Contact Management</h1>
      </div>
      <div className='cards'>
        <table id="example" className="table table-striped" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>
                    <button className='btn btn-danger mx-2' onClick={() => confirmDelete(contact.id, contact.name)}><i className="bi bi-trash3-fill"></i> Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div >
  )
}
