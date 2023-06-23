import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card'

import { ACCESS_TOKEN } from '../constants';
import { API_BASE_URL } from '../constants';

export default function SearchResult() {
    const navigate = useNavigate();
    const [stores, setStores] = useState([]);
    const [users, setUsers] = useState([]);

    const { q } = useParams();

    useEffect(() => {
        console.log("search store works")
        loadSearchResultedStores();
    }, [q])

    const loadSearchResultedStores = async () => {
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

        const userResults = await axios.get(`${API_BASE_URL}/user/search?keyword=${q}`, headers);
        const storeResults = await axios.get(`${API_BASE_URL}/store/search?keyword=${q}`, headers);

        setUsers(userResults.data);
        setStores(storeResults.data);
    }

    return (
        <div>
            <div className="heading">
                <Link className='btn btn-dark' to="/">« Go to home</Link>
                <h1>Search Result</h1>
            </div>
            <div>
                <h3>Users</h3>
                <div className='cards' style={{ marginTop: "25px" }}>
                    <table id="example" className="table table-striped" style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    // <Link to={`/user/${user.id}`}>
                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td><Link to={`/user/${user.id}`} className='btn btn-light mx-2'><i className="bi bi-eye-fill"></i> View</Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{ marginTop: "25px" }}>
                <h3>Stores</h3>
                <div className='cards' style={{ marginTop: "25px" }}>
                    {
                        stores.map((store, index) => (
                            <Card storeId={store.id} storeName={store.storeName} city={store.city} country={store.country} phone={store.phone} />
                        ))
                    }
                </div>
            </div>


        </div>
    )
}
