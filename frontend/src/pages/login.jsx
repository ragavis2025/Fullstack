import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() { const [formData,setFormdata]=useState({
     username:"",
     password:""
  })
  function handleChange(e) {
  setFormdata({
    ...formData,
    [e.target.name]: e.target.value
  });
  }
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Page",formData);
    alert("Login Successfull");
    navigate("/dashboard",{
      state:formData
    });
  }
  return(
    <>
    <div className="text-blue-500">Hi</div>
    <form onSubmit={handleSubmit}>
      <input type="text" required placeholder="Enter your name" name="username" onChange={handleChange}/>
      <input type="password" required placeholder="Enter your password" name="password"  onChange={handleChange}/>
      <button type="submit">Submit</button>   
    </form>
    </>
  );
}
export default Login;