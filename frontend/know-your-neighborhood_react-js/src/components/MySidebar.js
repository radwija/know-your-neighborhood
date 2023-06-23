import React, { Component, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import useProfile from '../util/UserInfo';

export default function MySidebar(props) {
  const { token, profile } = useProfile();
  const navigate = useNavigate();

  // console.log(profile?.role)
  return (
    <div className="sidebar">
      <Link to="/">
        <h2><i className="bi bi-houses-fill"></i> KYN</h2>
      </Link>
      <ul>
        {token ?
          <li><Link to="/"><i className="bi bi-house-door"></i> Home</Link></li>
          : <></>}
        {token ?
          <li><Link to="/profile"><i className="bi bi-person-circle"></i> Profile</Link></li>
          : <></>}
        {(token && profile?.role === 'ROLE_ADMIN') ?
          <li><Link to="/admin/users"><i className="bi bi-people"></i> User Management</Link></li>
          : <></>}
        {(token && profile?.role === 'ROLE_ADMIN') ?
          <li><Link to="/admin/stores"><i className="bi bi-shop-window"></i> Store Management</Link></li>
          : <></>}
        {(token && profile?.role === 'ROLE_ADMIN') ?
          <li><Link to="/admin/contacts"><i className="bi bi-chat-left-text"></i> Contact Management</Link></li>
          : <></>}
        {!token ?
          <li><Link to="/login"><i className="bi bi-box-arrow-in-right"></i> Login</Link></li> : <></>}
        {token ?
          <li><i className="fas fa-project-diagram"></i><SearchBar /></li>
          : <></>}
        {token ?
          <li><Link to="/login" onClick={() => {
            const isLogout = props?.onLogout()
            if (isLogout) {
              navigate('/login', { replace: true });
            }
          }}><i className="fas fa-home"></i><i className="bi bi-box-arrow-left"></i> Log Out</Link></li>
          : <></>}
      </ul>
    </div >
  )

}