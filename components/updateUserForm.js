import { useReducer } from "react"
import { BiBrush } from "react-icons/bi"
import Success from "./success"
import Bug from "./bug"

const formReducer = (state,event)=>{

    return {
        ...state,
        //esto es para cuando esta dentro de un imput text
        [event.target.name]:event.target.value
    }
}

export default function UpdateUserForm(){
    
    const [formData,setFormData] = useReducer(formReducer,{})

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(Object.keys(formData).length==0) return console.log("Don´t have Form Data");
        console.log(formData)
    }

    if(Object.keys(formData).length > 0) return <Bug message={"Error"}></Bug> 
    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div  className="input-type">
                <input type="text" onChange={setFormData} name="firstname"  className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Firstname"></input>
            </div>

            <div className="input-type">
                <input type="text" onChange={setFormData} name="lastname" className="border w-full px-5 py-3 focus:outline-none rounded-md"  placeholder="Lastname"></input>
            </div>

            <div className="input-type">
                <input type="text" onChange={setFormData} name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md"  placeholder="Email"></input>
            </div>

            <div className="input-type">
                <input type="text" onChange={setFormData} name="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md"  placeholder="Salary"></input>
            </div>

            <div className="input-type">
                <input type="date" onChange={setFormData} name="date" className="border px-5 py-3 focus:outline-none rounded-md"  placeholder="Date"></input>
            </div>

            <div className="flex-gap-10 items-center">
                <div className="form-check">
                    <input type="radio" onChange={setFormData} value="Active" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"></input>
                    <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
                        Active
                    </label>
                </div>

                <div className="form-check">
                    <input type="radio" onChange={setFormData} value="Inactive" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"></input>
                    <label htmlFor="radioDefault2" className="inline-block tet-gray-800">
                        Inactive
                    </label>
                </div>
            </div>
           
            <button className="flex justify-center text-ms w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-grenn-500 hover:text-green-500">
                Update <span className="px-1"><BiBrush size={24}></BiBrush></span>
                </button>
        </form>
    )
}