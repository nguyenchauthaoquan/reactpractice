import './App.css';
import AppContext from "./context/AppContext";
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import Classes from "./components/Classes";
import Users from "./components/Users";
import {GetClasses, GetUsers, PostClass} from "./reducer";
import AddClass from "./components/AddClass";
import AddUser from "./components/AddUser";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <AppContext.Provider value={{classes: GetClasses(),
        users: GetUsers()
    }}>
      <Layout>
          <Routes>
              <Route path={"/"} element={<Classes />}/>
              <Route path={"users/:classId"} element={<Users />} />
              <Route path={"users/detail/:email"} element={<UserDetail />} />
              <Route path={"users/:classId/addUser"} element={<AddUser />} />
              <Route path={"update/users/:classId/:email"} element={<AddUser />} />
              <Route path={"add/class"} element={<AddClass />} />
              <Route path={"update/class/:classId"} element={<AddClass />} />
          </Routes>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
