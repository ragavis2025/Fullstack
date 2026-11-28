import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../components/api";

function Dashboard(){
    const location = useLocation();
    const[userdata,setUserdata]=useState("");
    
    //function displaydata(){
      // setUserdata(location.state);
       //console.log(userdata)
   //}

    useEffect(()=>{
        setUserdata(location.state);
        console.log(userdata);
    },)

    const checkendpoint = async ()=>{
        const response = await API.get("/api/get")
        console.log(response.data);
    }

    return(
        <div>
            <button>Button1</button>
            <button onClick={checkendpoint}>Button</button>
        </div>
    );
}

export default Dashboard;