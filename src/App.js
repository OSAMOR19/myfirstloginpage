import React, {useState} from 'react';
import LoginForm from './Component/LoginForm';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password)
    console.log("Logged in");
  }
  

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <div className="App">
      {(user.email !="") ? (
        <div className="welcome">
         <h1>Welcome, <span>{user.name}</span></h1>
         <button>Logout</button>
        </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
