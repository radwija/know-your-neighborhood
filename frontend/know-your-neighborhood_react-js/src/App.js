import './App.css';
import React, { Component } from 'react';
import Home from './pages/Home';
import ViewStore from './pages/ViewStore'
import MySidebar from "./components/MySidebar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddStore from './pages/AddStore'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { ACCESS_TOKEN } from './constants'
import { getCurrentUser } from './util/APIUtils'
import OAuth2RedirectHandler from './oauth2/OAuth2RedirectHandler';
import Profile from './pages/profile/Profile'
import UserManagement from './admin/UserManagement';
import EditUserProfile from './pages/EditUserProfile'
import EditOwnProfile from './pages/EditOwnProfile'
import UserDetails from './pages/UserDetails'
import StoreManagement from './admin/StoreManagement'
import MyFooter from './components/MyFooter';
import EditUserStore from './pages/EditUserStore';
import SearchResult from './pages/SearchResult';
import AboutUs from './pages/AboutUs';
import TermsAndConditions from './pages/TermsAndConditions';
import ContactUs from './pages/ContactUs';
import NotFoundPage from './error/NotFoundPage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Admin from './admin/Admin';
import ForbiddenPage from './error/ForbiddenPage';
import ContactManagement from './admin/ContactManagement';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });
      }).catch(error => {
        this.setState({
          loading: false
        });
      });
  }

  handleLogout() {
    try {
      localStorage.removeItem(ACCESS_TOKEN);
      this.setState({
        authenticated: false,
        currentUser: null
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }
  render() {
    return (
      <div className="App wrapper">
        <Router>
          <MySidebar authenticated={this.state.authenticated} onLogout={this.handleLogout} />
          <div className='main'>
            <div className="main_card">
              <div className="container ">
                <Routes>
                  <Route path="/" element={<Home />} />

                  <Route path="/admin" element={<Admin />} />
                  <Route path="/admin/users" element={<UserManagement />} />
                  <Route path="/admin/update-user/:id" element={<EditUserProfile />} />
                  <Route path="/admin/stores" element={<StoreManagement />} />
                  <Route path="/admin/update-store/:cid" element={<EditUserStore />} />
                  <Route path="/admin/contacts" element={<ContactManagement />} />

                  <Route path="/user/:id" element={<UserDetails />} />
                  <Route path="/profile" element={<Profile data={this.state} />} />
                  <Route path="/profile/update" element={<EditOwnProfile data={this.state} />} />

                  <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
                  <Route path="/signup" element={<SignUp authenticated={this.state.authenticated} />} />
                  <Route path="/login" element={<Login authenticated={this.state.authenticated} />} />

                  <Route path="/addstore" element={<AddStore />} />
                  <Route path="/viewStore/:cid" element={<ViewStore />} />

                  <Route path="/search/:q" element={<SearchResult />} />

                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                  <Route path="/contact" element={<ContactUs />} />

                  <Route path='*' element={<NotFoundPage />} />
                  <Route path='/forbidden' element={<ForbiddenPage />} />
                </Routes>
              </div>
            </div>
            <MyFooter />
          </div>
        </Router>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.7.2/dist/js/bootstrap.bundle.min.js"></script>
      </div>
    );
  }
}
export default App;
