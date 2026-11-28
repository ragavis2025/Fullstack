import { useState } from "react";
import { useNavigate,useLocation} from "react-router-dom";
function Login() { 
  const location= useLocation();
  const [loginData,setLogindata]=useState({
     username:"",
     password:""
  })
  function handleChange(e) {
  setLogindata({
    ...loginData,
    [e.target.name]: e.target.value
  });
  }
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const registerData = location.state;
    if(loginData.username===registerData.name && loginData.password===registerData.password){
      console.log("If condition success");
      navigate("/dashboard",{
        state:loginData
      });
    }else{
      console.log("Invalid Username or Password")
    }
    console.log("Register data",registerData);
    console.log("Login Data",loginData);
    
  }
  return(
    <div className="min-h-screen flex items-center justify-center bg-bg-emerald-100/60 p-4">
    <form onSubmit={handleSubmit} className="w-full max-w-xs p-4 bg-white rounded-xl border-2 border-black shadow-lg space-y-3">
      <h1 className="text-emerald-700 font-bold text-2xl text-center ">Login Page</h1>
      <label htmlFor="name" className="block text-m font-bold text-emerald-700 mb-1">Name :</label>
      <input type="text" id="name" required placeholder="Enter your name" name="username" onChange={handleChange} className="w-full px-3.5 py-2 text-sm text-black placeholder:text-gray-500 bg-white border-2 border-black rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/30" />
      <label htmlFor="password" className="block text-m font-bold text-emerald-700 mb-1">Password :</label>
      <input type="password" id="password" required placeholder="Enter your password" name="password"  onChange={handleChange} className="w-full px-3.5 py-2 text-sm text-black placeholder:text-gray-500 bg-white border-2 border-black rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/30" />
      <button type="submit" className="w-full bg-emerald-600 text-white block text-sm font-bold mb-1 px-4 py-2.5 rounded-lg">Login to dashboard</button>   
    </form>
    </div>
  );
}
export default Login;