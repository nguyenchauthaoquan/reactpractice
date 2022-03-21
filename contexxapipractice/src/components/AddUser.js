import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import AppContext from "../context/AppContext";

const AddUser = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const id = useParams();
    var context = useContext(AppContext);
    var navigate = useNavigate();
    var user = {};

    useEffect(() => {
        if (id.email) {
            user = context.users.users.find(item => item.Email === id.email);
            setEmail(user.Email);
            setPassword(user.Password);
            setName(user.Name);
            setRole(user.Role);
        }
    }, []);

    const handleSubmit = () => {
        if (id.email) {
            axios.put("http://127.0.0.1:1880/user", {
                data: {
                    ClassId: id.classId,
                    Name: name,
                    Email: email
                }
            });
        } else {
            axios.post("http://127.0.0.1:1880/user", {
                Email: email,
                ClassId: id.classId,
                Password: password,
                Name: name,
                Role: role
            });
        }

        navigate(`/users/${id.classId}`);
        window.location.reload();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text"
                   id={"email"}
                   value={email}
                    onChange={event => setEmail(event.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" id={"password"} value={password} onChange={event => setPassword(event.target.value)} />
            <label htmlFor="name">Name</label>
            <input type="text" id={"name"} value={name} onChange={event => setName(event.target.value)} />
            <label htmlFor="role">Role</label>
            <input type="number" id={"role"} value={role} onChange={event => setRole(event.target.value)} />
            <button type={"submit"}>Submit</button>
        </form>
    );
};

AddUser.propTypes = {
    
};

export default AddUser;
