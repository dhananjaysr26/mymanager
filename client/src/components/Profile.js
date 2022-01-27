import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useParams } from 'react-router-dom';

import '../styles/Profile.css'
import defaultPic from "../images/profile-pic.png"
import wifiPic from "../images/wifi.gif"
import settingIcon from "../images/setting.png"

const axios = require('axios');

function Profile() {
    const { profileId } = useParams();
    const [loading, setLoading] = useState(false)
    const [profileData, setProfileData] = useState({})
    const [noOfDays, setNoOfDays] = useState('')
    const today = new Date();

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }

    useEffect(() => {
        axios.get('http://localhost:5000/usrbyid', {
            params: {
                ID: profileId
            }
        }).then((res) => {
            console.log(res.data)
            setProfileData(res.data)
            setNoOfDays(moment(today).diff(profileData.CountDate, 'day'))
            sleep(2000)
            setLoading(true)
        })
    }, [1])

    return (
        <div className='container'>
            {loading ? (
                <div className="profile-box">
                    <img className='menu-icon' src={wifiPic} alt='menu' />
                    <img className='setting-icon' src={settingIcon} alt='setting' />
                    <img className='profile-pic' src={defaultPic} alt='userPic' />
                    <h1>{profileData.Name}</h1>
                    <p>Wifi Used:{noOfDays} Days</p>
                    <button className='balance'>Balance:{profileData.Rate * noOfDays} ₹</button>
                    <div className='profile-bottom'>
                        <p>Payment history</p>
                    </div>
                </div>

            ) :
                (
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                )
            }



        </div>
    )
}

export default Profile
