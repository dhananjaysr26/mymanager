import React, { useState } from 'react';
import '../styles/AdminAddUser.css';
import moment from 'moment'
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function AdminAddUser() {
    const [name, setName] = useState("");
    const [rate, setRate] = useState("");
    const [startDate, setStartDate] = useState();
    const [countDate, setCountDate] = useState();
    let history = useHistory();

    const SubmitForm = () => {
        console.log("SubmitForm");
        axios.post('http://localhost:5000/createusr', {
            Name: name,
            StartDate: startDate,
            CountDate: countDate,
            Rate: rate
        })
            .then(function (response) {
                alert("User Created Successfylly!");
                history.push('/');
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return <div className='form-container'>
        <div className="form">
            <div className="form-content">
                <input className='name-text' type="text" placeholder='Name' maxLength='20' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='rate-text' type='number' placeholder='Rate' maxLength='5' value={rate} onChange={(e) => setRate(e.target.value)} />
            </div>
            <div className="form-content">
                <p >Start date:</p>
                <input type='date' onChange={(date) => setStartDate(date.target.value)} />
                <p >Count date:</p>
                <input type='date' onChange={(date) => setCountDate(date.target.value)} />
            </div>

            <div className="form-btn">
                <button className='submit-btn' onClick={SubmitForm}>Submit</button>
            </div>

        </div>

    </div>;
}

export default AdminAddUser;
