import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')
    const [errmsg, setErrMsg] = useState('')
    const validateUser = () => {
        setErrMsg('');
        console.log('userName', userName, 'userPass', userPass)
        if (userName === 'admin' && userPass === 'Pass@123') {
            console.log('user is valid');
            navigate('/dashboard');
        }
        else {
            setErrMsg('Invalid User');
        }
    }

    const getData = (e) => {

        setUserPass(e.target.value)

    }

    const getName = (e) => {
        setUserName(e.target.value)
    }

    return (
        <>
            <input type="text" id="username" placeholder="enter your user name" onChange={getName}></input>
            <input type="password" id="userpass" placeholder="enter your password" onChange={getData}></input>
            <button onClick={validateUser}>Login </button>
            <p>{errmsg}</p>
        </>
    )

};

export default LoginPage;