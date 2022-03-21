import logo from './logo.svg';
import './App.css';
import {getUsersAction} from "./actions/actions";
import {connect} from "react-redux";
import {useEffect} from "react";
import {useAge, useColor} from "./code/code";

function App(props) {
  const {users} = props.users;
  const [color, setColor] = useColor("");
  const [age, setAge] = useAge(0);

  useEffect(() => {
    props.getUsers();
  }, []);


  return (
      <div className="table-responsive">
        <table className={"table table-striped table-bordered table-hover"}>
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
          </thead>
          <tbody>
          {
            (users) ? (
                users.map(item => {
                      return (
                          <tr key={item.id} style={{color: () => setColor(item.color)}} onClick={() => setAge(item.age)}>
                            <td>{item.id}</td>
                            <td>{`${item.first_name} ${item.last_name}`}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                          </tr>
                      )
                    }
                )
                ) : (
                <td colSpan={4} className="spinner-border text-primary text-center" role="status">
                  <span className="visually-hidden">Loading...</span>
                </td>
            )
          }
          </tbody>
        </table>
      </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getUsers: () => {
      dispatch(getUsersAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);