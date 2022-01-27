import React from 'react';
import moment from 'moment';
import defaultPic from "../images/profile-pic.png"
import { useHistory } from 'react-router-dom';


const Card = (props) => {
    let history = useHistory();
    const today = new Date()
    const Amount = moment(today).diff(props.CountDate, 'day') * props.Rate || 'NA';
    return <div className='card'>
        <img className='profile-pic' src={defaultPic} />
        <h2 className='name'>{props.Name}</h2>
        <h1 className='amount'>{Amount}</h1>
        <button className='view-btn' onClick={() => history.push(`/profile/${props.ID}`)}>View Details</button>
    </div>;
};

export default Card;
