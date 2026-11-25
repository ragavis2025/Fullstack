import { useState } from "react";
function Login() {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
 const formsubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
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
      <input type="email" id="Email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" id="password" required placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button type="submit">Submit</button>   
    </form>
    </>
  );
}
export default Login;