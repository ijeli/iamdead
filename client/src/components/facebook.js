import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import '../App.css';
import API from '../utils/'

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }
    responseFacebook = response => {
        // console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    }

    pushdata = () => {
        const newProfile = {
            email: this.state.email,
            firstName: this.state.name
        };
        API.createProfile(newProfile)
        .then(console.log(newProfile))
        .catch((err) => console.log(err))
    }

    componentClicked = () => console.log("clicked");

    render() {
        let fbContent;

        if(this.state.isLoggedIn) {
            this.pushdata();
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'autp',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                <img src={this.state.picture} alt={this.state.name} />
                <h2>Welcome {this.state.name}</h2>
                Email: {this.state.email}
                </div>
            );
        } else {
            fbContent = (<FacebookLogin
                appId="1931385593565712"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
        }

        return (<div>{fbContent}</div>) 
    }
}