// import * as React from 'react';

import React, { useState } from 'react';

import { request, setAuthToken } from '../services/axioshelper';
import { withRouter, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const onChangeHandler = (event) => {
      const { name, value } = event.target;
      if (name === 'username') {
        setUsername(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    };
  
    const onSubmitLogin = (e) => {
      e.preventDefault();

        request("POST", 
        "/login",
        { 
          login: username, 
          password: password, 
        }
        ).then((response) => {
          setAuthToken(response.data.token);
          navigate('/'); 
        }).catch((error) => {
            
      });
    };
  
    return (
      <div>
        <section className="section">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Logowanie</h5>
  
                <form id="login-form" className="form" onSubmit={onSubmitLogin}>
                  <div className="row mb-3">
                    <label htmlFor="username" className="col-sm-2 col-form-label">
                      Login
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
  
                  <div className="row mb-3">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                      Hasło
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
  
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Zaloguj się
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default LoginComponent;