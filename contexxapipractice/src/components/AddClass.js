import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import AppContext from "../context/AppContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddClass = props => {
    var context = useContext(AppContext);
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [note, setNote] = useState("");

    const onChangeName = event => {
        setName(event.target.value);
    }

    const onChangeNote = event => {
        setNote(event.target.value);
    }

    const handleSubmit = event => {
        axios.post("http://127.0.0.1:1880/class", {
            Name: name,
            Note: note
        });

        navigate("/");
        window.location.reload();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={onChangeName}/>
            <input type="text" value={note} onChange={onChangeNote}/>
            <button type={"submit"}>Submit</button>
        </form>
    );
};

AddClass.propTypes = {

};

export default AddClass;
