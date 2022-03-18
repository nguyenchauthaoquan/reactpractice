import logo from '../logo.svg';
import '../styles/css/App.css';
import {getDataAction} from "../actions";
import {connect} from "react-redux";
import Table from "./Table/Table";

function App(props) {
  const {users} = props.users;
  return (
    <div>
      <button onClick={() => props.getUsers()}>Click</button>
      <Table hoverable bordered striped contents={users} />
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getUsers: () => {
      dispatch(getDataAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
