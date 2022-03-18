import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Layout = props => {
    return (
        <>
            <Link to={"/"}>Class Management</Link>
            {props.children}
        </>
    );
};

Layout.propTypes = {
    
};

export default Layout;
