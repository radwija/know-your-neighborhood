import React, { useEffect, useState } from 'react';
import './Profile.css';
import { Link, useNavigate } from 'react-router-dom';
import useProfile from '../../util/UserInfo';
import { ACCESS_TOKEN, API_BASE_URL } from '../../constants';
import axios from 'axios';
import Card from '../../components/Card';

const Profile = (props) => {
    const { profile } = useProfile();
    const { data } = props;
    const { authenticated, currentUser } = data;
    console.log(currentUser)

    const [stores, setStores] = useState([]);
    useEffect(() => {
        if (currentUser && currentUser.id) {
            loadUser();
        }
    }, [currentUser]);

    const loadUser = async () => {
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
        const userStore = await axios.get(`${API_BASE_URL}/store/owner?uId=${currentUser.id}`, headers);

        setStores(userStore.data)
    }
    const navigate = useNavigate();
    if (authenticated) {
        return (
            <div>
                <div className='heading d-flex'>
                    <h1>Profile</h1>
                    <Link to={"/profile/update"} ><i class="bi bi-pencil-square"></i> Edit</Link>
                </div>
                <div className='profile-bg' >
                    <div className="profile-content text-white ">

                        <div className="user-detail text-white d-flex">
                            <img src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
                                alt="" style={{ width: "200px" }} />
                            <div className="information">
                                <h3>{profile?.name}</h3>
                                <div><i className="bi bi-person-circle"></i> Username: {profile?.username}</div>
                                <div><i className="bi bi-envelope-at-fill"></i> Email: {profile?.email}</div>
                                <div><i className="bi bi-telephone-fill"></i> Phone: {profile?.phone}</div>
                                <div><i className="bi bi-geo-alt-fill"></i> City: {profile?.city}</div>
                                <div><i className="bi bi-globe2"></i> Country: {profile?.country}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {stores.length !== 0 ?
                    <div style={{ marginTop: "40px" }}>
                        <h3>Stores</h3>
                        <div className='cards' style={{ marginTop: "20px" }}>
                            {
                                stores.map((store, index) => (
                                    <Card key={index} storeId={store.id} storeName={store.storeName} city={store.city} country={store.country} phone={store.phone} />
                                ))
                            }
                        </div>
                    </div>
                    : <></>}
            </div>
        );
    } else {
        navigate("/login")
    }
}

export default Profile