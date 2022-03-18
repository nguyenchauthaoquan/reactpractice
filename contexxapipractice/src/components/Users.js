import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import AppContext from "../context/AppContext";
import {Link, useParams} from "react-router-dom";

const Users = props => {
    var context = useContext(AppContext);
    var classId = useParams();
    classId = parseInt(classId.classId);
    var users = context.users.users.filter(item => item.ClassId === classId);

    return (
        <table className={"table table-hover table-striped table-bordered"}>
            <thead>
            <tr>
                <th>Email</th>
                <th>Class Id</th>
                <th>Password</th>
                <th>Name</th>
                <th>Role</th>
            </tr>
            <tr>
                <th colSpan={5}>
                    <Link to={"addUser"}>Add New User</Link>
                </th>
            </tr>
            </thead>
            <tbody>
            {
                users && users.map((item, index) =>
                <tr key={index}>
                    <td>{item.Email}</td>
                    <td>{item.ClassId}</td>
                    <td>{item.Password}</td>
                    <td><Link to={`/users/detail/${item.Email}`}>{item.Name}</Link></td>
                    <td>{item.Role}</td>
                </tr>
                )
            }
            </tbody>
        </table>
    )
};

Users.propTypes = {
    
};

export default Users;
