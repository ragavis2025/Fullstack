import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import {registerschema} from "../components/FormSchema/registerschema";
import {zodResolver} from "@hookform/resolvers/zod";
function Register(){
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("registered successfully")
        navigate("/",{
            state:data
        })
    }
return(
      <div className="min-h-screen flex items-center justify-center bg-bg-emerald-100/60 p-4">
        <form onSubmit={handleSubmit(onSubmit1)} className="w-full max-w-mdbg-emerald-50 p-6 bg-white rounded-xl border-2 border-black shadow-lg space-y-4">
            <h1 className="text-emerald-700 font-bold text-2xl text-center ">Registration Page</h1>
            <label htmlFor="name" className="block text-sm font-bold text-emerald-700 mb-1">Name :</label>
            <input type="text" id="name" required placeholder="Enter your name" {...register("name")} className="w-full px-3.5 py-2 text-sm text-black placeholder:text-gray-500 bg-white border-2 border-black rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/30"/>
            <p>{errors.name?.message}</p>
            <label htmlFor="email" className="block text-sm font-bold text-emerald-700 mb-1">Email id :</label>
            <input type="email" id="email" required placeholder="Enter your email" {...register("email")} className="w-full px-3.5 py-2 text-sm text-black placeholder:text-gray-500 bg-white border-2 border-black rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/30"/>
            <p>{errors.email?.message}</p>
            <label htmlFor="password" className="block text-sm font-bold text-emerald-700 mb-1">Password :</label>
            <input type="password" id="password" required placeholder="Enter your password" {...register("password")} className="w-full px-3.5 py-2 text-sm text-black placeholder:text-gray-500 bg-white border-2 border-black rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/30" />
            <p>{errors.password?.message}</p>
            <label htmlFor="age" className="block text-sm font-bold text-emerald-700 mb-1">Age :</label>
            <input type="number" id="age" required placeholder="Enter your age" {...register("age")} className="w-full px-3.5 py-2 text-sm text-black placeholder:text-gray-500 bg-white border-2 border-black rounded-lg focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/30"/>
            <p>{errors.age?.message}</p>
            <button type="submit" className="w-full bg-emerald-600 text-white block text-sm font-bold mb-1 px-4 py-2.5 rounded-lg">Submit</button>   
        </form>
      </div>
    )
}

export default Register;