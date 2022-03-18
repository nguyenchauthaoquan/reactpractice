import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TableRow extends Component {
    render() {
        return (
            <tr className={`
            ${this.props.active ? "table-active" : null}
            ${this.props.primary ? "table-primary" : null}
            ${this.props.secondary ? "table-secondary" : null}
            ${this.props.success ? "table-success" : null}
            ${this.props.danger ? "table-danger" : null}
            ${this.props.warning ? "table-warning" : null}
            ${this.props.info ? "table-info" : null}
            ${this.props.light ? "table-light" : null}
            ${this.props.dark ? "table-dark" : null}
            `}>

            </tr>
        );
    }
}

TableRow.propTypes = {};

export default TableRow;
