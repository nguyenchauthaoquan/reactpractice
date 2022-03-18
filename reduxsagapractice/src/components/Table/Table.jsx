import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
    render() {
        return (
            <table className={`table ${this.props.hoverable ? "table-hover" : null} 
                                     ${this.props.bordered ? "table-bordered" : null}
                                     ${this.props.striped ? "table-striped" : null}
                                     ${this.props.primary ? "table-primary" : null}
                                     ${this.props.secondary ? "table-secondary" : null}
                                     ${this.props.success ? "table-success" : null}
                                     ${this.props.danger ? "table-danger" : null}
                                     ${this.props.warning ? "table-warning" : null}
                                     ${this.props.info ? "table-info" : null}
                                     ${this.props.light ? "table-light" : null}
                                     ${this.props.dark ? "table-dark" : null}
                               `
                              }>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.contents.map((item, index) =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.email}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {};

export default Table;
