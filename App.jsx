import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import { AuthContext } from './context/AuthProvider';
import { setLocalStorage } from './utils/localStorage';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData,SetUserData] = useContext(AuthContext);
  useEffect(() => {
    if(!localStorage.getItem('employees')|| !localStorage.getItem('admin')){
      setLocalStorage();
    }
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsedData = JSON.parse(loggedInUser);
      setUser(parsedData.role);
      setLoggedInUserData(parsedData.data || null);
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleLogin = (email, password) => {
    if(email =='admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee=userData.find((e)=> email==e.email && e.password==password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    }
    else{
      alert("Invalid Credentials")
    }
  }
  //   const employees = JSON.parse(localStorage.getItem('employees'));
  //   const admin = JSON.parse(localStorage.getItem('admin'));
  //   if (admin.some((a) => a.email === email && a.password === password)) {
  //     const adminData = { role: 'admin' };
  //     setUser(adminData.role);
  //     localStorage.setItem('loggedInUser', JSON.stringify(adminData));
  //   }
  //   else if (employees.some((e) => e.email === email && e.password === password)) {
  //     const employee = employees.find((e) => e.email === email && e.password === password);
  //     const employeeData = { role: 'employee', data: employee };
  //     setUser(employeeData.role);
  //     setLoggedInUserData(employee);
  //     localStorage.setItem('loggedInUser', JSON.stringify(employeeData));
  //   }
  //   else {
  //     alert('Invalid Credentials');
  //   }
  // };
  
  

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />  }
      {user === 'admin' && <AdminDashboard changeUser={handleLogout} />}
      {user === 'employee' && (
        <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />
      )}
    </>
  );
};

export default App
