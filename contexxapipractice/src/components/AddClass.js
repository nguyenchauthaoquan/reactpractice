import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AppContext from "../context/AppContext";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const AddClass = props => {
    var context = useContext(AppContext);
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    const id = useParams();
    var foundClass = {};

    const onChangeName = event => {
        setName(event.target.value);
    }

    const onChangeNote = event => {
        setNote(event.target.value);
    }

    useEffect(() => {
        if (id.classId) {
            foundClass = context.classes.classes.find(item => item.Id === parseInt(id.classId));
            setName(foundClass.Name);
            setNote(foundClass.Note)
        }
    }, []);


    const handleSubmit = (event) => {
        if (id.classId) {
            axios.put("http://127.0.0.1:1880/class", {
                Name: name,
                Note: note,
                Id: id.classId,
            });
        }
        else {
            axios.post("http://127.0.0.1:1880/class", {
                Name: name,
                Note: note
            });
        }


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
