import { useRef } from 'react';

function UnControlledCompo(props) {
    const name = useRef();
    const email = useRef();

    const saveData = () =>{
      console.log('name',name.current.value,'email',email.current.value) ;
    }

    return (
        <>
            <h2>Uncontrolled compo</h2><br/>
            <label>Name</label><br/>
            <input type='text' placeholder="enter your name" ref={name}/><br/>
            <label>email</label><br/>
            <input type='text' placeholder="enter your email" ref={email}/><br/>
            <button onClick={saveData}>SaveData</button>

       </>
    )
};

export default UnControlledCompo;