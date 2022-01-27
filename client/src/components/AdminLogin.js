import React from 'react';
import '../styles/AdminLogin.css'
import wifiPic from '../images/wifi.jpg'
import userIcon from '../images/user.png'
import lockIcon from '../images/lock.png'

function AdminLogin() {
    return <div>
        <div class="login-card">
            <div class="login-card-content">
                <div class="header">
                    <div class="logo">
                        <img src={wifiPic} width="175px" height="175px" />
                    </div>
                    <h2>Home<span class="highlight">Wifi</span></h2>
                    <h3>Pay and Enjoy Wifi</h3>
                </div>
                <div class="form">
                    <div class="form-field username">
                        <div class="icon">
                            <img src={userIcon} width="30px" height="30px" />
                        </div>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div class="form-field password">
                        <div class="icon">
                            <img src={lockIcon} width="30px" height="30px" />
                        </div>
                        <input type="password" placeholder="Password" />
                    </div>

                    <button className='admin-button' type="submit">
                        Login
                    </button>
                </div>
            </div>
            <div class="login-card-footer">
                <a href="">User Profile</a>
            </div>
        </div>

    </div>
        ;
}

export default AdminLogin;
