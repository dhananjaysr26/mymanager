import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';

import '../styles/AdminHome.css'
import Card from './Card';

const axios = require('axios');

function AdminHome() {
    const [usersData, setUsersData] = useState([])
    const [loading, setLoading] = useState(false)
    const today = new Date();
    // let history = useHistory();
    useEffect(() => {
        axios.get('http://localhost:5000/usr').then((res) => {
            setUsersData(res.data)
            console.log(res.data)
            setLoading(true);
        })
    }, [])
    return (
        <div className='container'>
            {loading ? (
                usersData.map((data, index) => {
                    return (
                        <Card Name={data.Name} Rate={data.Rate} CountDate={data.CountDate} key={index} ID={data._id} />
                    )

                })) :
                (
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                )
            }
        </div>
    )
}

export default AdminHome;
