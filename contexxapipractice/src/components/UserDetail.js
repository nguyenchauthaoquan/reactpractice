import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import AppContext from "../context/AppContext";
import {useParams} from "react-router-dom";

const UserDetail = props => {
    var context = useContext(AppContext);
    var userId = useParams();
    var user = context.users.users.find(item => item.Email === userId.email);
    console.log(user)
    return (
        <>
            <h1>Welcome</h1>
            <h1>Name: {user.Name}</h1>
            <h1>Email: {user.Email}</h1>
            <h1>Password: {user.Password}</h1>
            <h1>ClassName: {user.ClassName}</h1>
        </>
    );
};

UserDetail.propTypes = {

};

export default UserDetail;
