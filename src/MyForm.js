import { useState } from "react";

function MyForm(){ 

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [language,setLanguage] = useState('');
    const [passwordErrMsg,setPasswordErrMsg] = useState('');


    const getData = (e) =>{
        console.log('e.target.value',e.target.value,'e.target.id',e.target.id);
        if(e.target.id === 'name')
        {
            setName(e.target.value)
        }

        if(e.target.id === 'email')
        {
            setEmail(e.target.value);
        }

        if(e.target.id === 'pass')
        {
            setPassword(e.target.value);
        }
    }

    const selectLang = (e) =>{
        console.log('e.target.value',e.target.value);
        setLanguage(e.target.value)
    }

    const saveData = (e) =>{
        setPasswordErrMsg('')
        console.log('name',name,'email',email,'password',password,'language',language);
        if(!password){
            setPasswordErrMsg('Please eneter your password');
            e.preventDefault()

            return false;
        }
        e.preventDefault()
        // api calll axios
    }

    return(
        <>
            <h2>Leran to create the form in react</h2>
            <div style={{backgroundColor:'cyan',textAlign:'center'}}>
            <form onSubmit={saveData}>
                <label>Name</label> <br/>
                <input type="text" id="name" placeholder="Enter your name" onChange={getData} required></input><br/>
                
                <label>Email</label><br/>
                <input type="email" id="email" placeholder="eneter your email id" onChange={getData}></input><br/>

                <label>password</label><br/>
                <input type="password" id="pass" placeholder="eneter your password" onChange={getData}></input><br/>
                <span style={{color:'red'}}>{passwordErrMsg}</span><br/>

                <label>User Descriptiom</label><br/>
                <textarea id="des"></textarea><br/>

                <lable>Language</lable><br/>
                <select onChange={selectLang}><br/>
                    <option value='JavaScript'>JavaScript</option>
                    <option value='Python'>Python</option>
                    <option value='React'>React</option>
                </select><br/>

                <label>File</label><br/>
                <input type='file' id="file"></input><br/>

                <input type="submit" value="submit"></input>
            </form>
            {/* <button onClick={saveData}>Save</button> */}
            </div>
            <p>user entered name is {name} . User email id is {email} , user password is {password} ,
            user chose {language} lang</p>

        </>
    )
}

export default MyForm;
