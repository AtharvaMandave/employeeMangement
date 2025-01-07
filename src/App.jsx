import { useContext, useState, useEffect } from 'react';
import Login from './components/Auth/Login'
import AdminDashboard from "./components/Dashborad/AdminDashboard"
import EmployeeDashborad from "./components/Dashborad/EmployeeDashborad"
import { AuthContext } from './context/AuthProvider';
import AcceptTasks from './components/TasksLists/AcceptTasks';

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  }, [])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }
 



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashborad changeUser={setUser} data={loggedInUserData} /> : null)}
   
    </>
  );
}

export default App;
