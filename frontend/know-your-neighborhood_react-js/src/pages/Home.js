import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { MyContext } from "./MyContext";
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/Card'

import { ACCESS_TOKEN } from '../constants';
import { API_BASE_URL } from '../constants';
import useProfile from '../util/UserInfo';

export default function Home() {
    const { profile } = useProfile();
    const navigate = useNavigate();
    const [stores, setStores] = useState([]);

    useEffect(() => {
        loadStores();
    }, []);

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
    return (
        <div>
            <div className='heading'>
                <h1>Store List</h1>
                {profile?.role === 'ROLE_USER' ?
                    <Link to={"/addstore"} className='btn btn-dark'>+ Add a store</Link>
                    : <></>}
            </div>
            <div className='cards'>
                {
                    stores.map((store, index) => (
                        <Card key={index} storeId={store.id} storeName={store.storeName} city={store.city} country={store.country} phone={store.phone} />
                    ))
                }
            </div>
        </div>
    )
}
