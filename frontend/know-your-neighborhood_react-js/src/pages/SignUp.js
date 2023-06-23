import React, { Component } from 'react';
// import './Signup.css';
import { Link, Navigate } from 'react-router-dom'
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from '../constants';
import { signup } from '../util/APIUtils';
import fbLogo from '../img/fb-logo.png';
import googleLogo from '../img/fb-logo.png';
import {
    useAlert
} from 'react-alert'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {

    const alert = useAlert()
    const navigate = useNavigate();

    if (props.authenticated) {
        return <Navigate
            to={{
                pathname: "/",
                state: { from: props.location }
            }} />;
    }

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h1 className="signup-title">Signup with Know Your Neighborhood</h1>
                <SocialSignup />
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <SignupForm {...props}
                    onSuccess={(msg) => {
                        alert.success(msg)
                        navigate('/login')
                    }} onFailed={(msg) => {
                        alert.error(msg)
                    }}
                />
                <span className="login-link">Already have an account? <Link to="/login">Login!</Link></span>
            </div>
        </div>
    );
}


const SocialSignup = () => {
    return (
        <div className="social-signup">
            <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                <i class="bi bi-google"></i> Sign up with Google</a>
            <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                <i class="bi bi-facebook"></i> Sign up with Facebook</a>
        </div>
    );
}

class SignupForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const signUpRequest = Object.assign({}, this.state);

        signup(signUpRequest)
            .then(response => {
                this.props.onSuccess("You're successfully registered. Please login to continue!");
            }).catch(error => {
                this.props.onFailed((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="text" name="name"
                        className="form-control" placeholder="Name"
                        value={this.state.name} onChange={this.handleInputChange} required />
                </div>
                <div className="form-item">
                    <input type="text" name="username"
                        className="form-control" placeholder="Username"
                        value={this.state.username} onChange={this.handleInputChange} required />
                </div>
                <div className="form-item">
                    <input type="email" name="email"
                        className="form-control" placeholder="Email"
                        value={this.state.email} onChange={this.handleInputChange} required />
                </div>
                <div className="form-item">
                    <input type="password" name="password"
                        className="form-control" placeholder="Password"
                        value={this.state.password} onChange={this.handleInputChange} required />
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary" >Sign Up</button>
                </div>
            </form>

        );
    }
}

export default SignUp