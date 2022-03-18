import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import AppContext from "../context/AppContext";
import {Link} from "react-router-dom";

const Classes = props => {
    var context = useContext(AppContext);
    var classes = context.classes.classes;

    return (
        <>
            <table className={"table table-hover table-striped table-bordered"}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Note</th>
                </tr>
                <tr>
                    <th colSpan={3}>
                        <Link to={"add/class"}>Add Class</Link>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    classes && classes.map((item, index) =>
                        <tr key={item.Id}>
                            <td>{item.Id}</td>
                            <td><Link to={`users/${item.Id}`}>{item.Name}</Link></td>
                            <td>{item.Note}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    )
};

Classes.propTypes = {

};

export default Classes;
