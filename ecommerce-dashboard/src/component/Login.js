import Header from './Header';
import React , {useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';


function Login()
{    
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    useEffect(() => {
        if(localStorage.getItem('user_info'))
        {
            history.push("/add")
        }
    },[])

    async function login()
    {
        let item = {email, password};
        let result = await fetch("http://localhost:8000/api/login",{
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json',
                "Accept":"application/json"
            },
            body: JSON.stringify(item)

        });
        result = await result.json();
        localStorage.setItem("user_info",JSON.stringify(result))
        history.push("/add")

    }

    return(
        <>
        <Header/>
        <div>
            <h1>Login</h1>
        </div>
        <div className="col-sm-6 offset-sm-3">
        <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enetr email" />
        <br/>
        <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enetr password" />
        <br/>
        <input type="button" onClick={login} name="save" value="Save" className="btn btn-primary" />
        </div>
        </>
    )

}

export default Login;