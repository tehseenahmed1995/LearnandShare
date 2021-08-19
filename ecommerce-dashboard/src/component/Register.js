import React , {useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';

function Register()
{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    useEffect(() => {
        if(localStorage.getItem('user_info'))
        {
            history.push("/add")
        }
    },[])

    async function signUp()
    {
        let item = { name , email , password };
        let result = await fetch("http://localhost:8000/api/register",{
            method: "POST",
            body : JSON.stringify(item),
            headers: {
                "Content-Type" : 'application/json',
                "Accept":"application/json"
            }
        })
        result = await result.json()
        localStorage.setItem('user_info',JSON.stringify(result))
        history.push("/add")
    }

    return(
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
            <h1>Register</h1>
            <input type="text" className="form-control" name="name" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            <br/>
            <input type="email" className="form-control" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <br/>
            <input type="password" className="form-control" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <br/>
            <button onClick={signUp} className="btn btn-primary">Signup</button>
        </div>
        </>
    )

}

export default Register;