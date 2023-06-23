import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ACCESS_TOKEN } from '../constants';
import { API_BASE_URL } from '../constants';
import useProfile from '../util/UserInfo';

export default function ViewStore() {
    const { profile } = useProfile();
    const navigate = useNavigate();
    const [store, setStore] = useState({
        storeName: "",
        city: "",
        country: "",
        phone: "",
    });

    const { cid } = useParams();
    useEffect(() => {
        loadStore();
    }, [cid]);

    const loadStore = async () => {
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
    console.log(store.user)
    return (
        <div>
            <div className="heading d-flex">
                <h1>Store Detail</h1>
                {profile?.role === 'ROLE_ADMIN' ?
                    <Link to={`/admin/update-store/${store.id}`} ><i class="bi bi-pencil-square"></i> Edit</Link>
                    : <></>
                }
            </div>
            <div className='row'>
                <div className='col-6'>
                    <img className='store-detail-img' src='https://img.etimg.com/thumb/width-1200,height-900,imgsize-122620,resizemode-1,msid-75214721/industry/services/retail/future-group-negotiates-rents-for-its-1700-stores.jpg' />
                </div>
                <div className='col-6'>
                    <h1>{store.storeName}</h1>
                    <div><i className="bi bi-geo-alt-fill"></i> {store.city}</div>
                    <div><i className="bi bi-globe2"></i> {store.country}</div>
                    <div className='card-detail-phone'><i className="bi bi-telephone-fill"></i> {store.phone}</div>
                </div>
            </div>
        </div>
    )
}
