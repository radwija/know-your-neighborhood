import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN } from '../constants';

const useProfile = () => {
    const [profile, setProfile] = useState();
    const navigate = useNavigate();
    const token = localStorage.getItem(ACCESS_TOKEN)
    const headers = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    };

    React.useEffect(() => {
        // Check token
        if (!token) {
            navigate('/login')
            return;
        }

        axios.get("http://localhost:8080/user/me", headers).then(data => {
            setProfile(data.data)
        })

    }, [])

    return { token: token, profile: profile }
}

export default useProfile;
