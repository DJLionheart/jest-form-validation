import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import fns from '../utils/functions';

export default class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    username(e) {
        this.setState({
            username: e.target.value
        })
    }
    password(e) {
        this.setState({
            password: e.target.value
        })
    }

    validateUsername(username) {
        let flag = true;
        
        if(!username) {
            flag = false;
        }
        // if any of my tests fail, set the flag to false
        if(username.length < 6) {
            flag = false;
        }
        if(username.indexOf(' ') !== -1) {
            flag = false;
        }
        // Ways to check for spaces: 

        // contains ' '
        // split(' ') - only one element.
        // .indexOf(' ') --> -1

        return flag;
    }

    createPassword() {
        if(fns.validateUsername(this.state.username)) {
            alert('Password created')
        } else {
            alert('Invalid credentials.')
        }
        
    }

    render() {
        return (
            <div style={{margin: 20}}>
                <h4>Create username and password</h4>
                <span>Username must be at least 6 characters and cannot contain spaces.</span>
                <br />
                <TextField
                    onChange={(e) => this.username(e)}
                    hintText="Type your new username"
                    floatingLabelText="Username"
                />
                <br />
                <p>Password must contain:</p>
                <p>- at least 8 characters</p>
                <p>- upppercase and lowercase letters</p>
                <p>- a number</p>
                <TextField
                    onChange={(e) => this.password(e)}
                    hintText="type your new password"
                    floatingLabelText="Password"
                /><br />
                <br />
                <RaisedButton onClick={()=>this.createPassword()} label="Create" secondary={true} />
            </div> 
        )
    }
}