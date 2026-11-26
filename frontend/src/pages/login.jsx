import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  {/*const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");*/}
  const [formData,setFormdata]=useState({
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
 const formsubmit = (e) => {
    e.preventDefault();
    console.log({"Login Page",formData});
    alert("Login Successfull");
    navigate("/dashboard",{
      state:formData
    });
  }
  return(
    <>
    <div className="text-blue-500">Hi</div>
   {/*
    <input type="email" id="Email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" id="password" required placeholder="Enter your password" value={password} onChange={(e)=>console.log(e.target.value)}/>
    <button type="submit" onClick={() => print()}>Submit</button>
    <button type="submit" onClick={console.log(email,password)}>Submit</button>
    */}
    <form onSubmit={formsubmit}>
      <input type="text" required placeholder="Enter your name" name="username" onChange={handleChange}/>
      <input type="password" required placeholder="Enter your password" name="password"  onChange={handleChange}/>
      <button type="submit">Submit</button>   
    </form>
    </>
  );
}
export default Login;