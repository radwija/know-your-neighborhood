import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../constants';
import { Navigate, useLocation } from 'react-router-dom'

const OAuth2RedirectHandler = () => {
    const location = useLocation()
    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    const token = getUrlParameter('token');
    const error = getUrlParameter('error');

    if (token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        return <Navigate to={{
            pathname: "/",
            state: { from: location }
        }} />;
    } else {
        return <Navigate to={{
            pathname: "/login",
            state: {
                from: this.props.location,
                error: error
            }
        }} />;
    }
}

export default OAuth2RedirectHandler;