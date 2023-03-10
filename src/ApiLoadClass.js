import React from "react"
import axios from "axios";

class ApiLoad extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
 
    componentDidMount(){
        let response = axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war');
        response.then((response)=>{
            console.log('response',response)
        })
        // console.log('response',response);
    }

    render(){
        return(
            <h1>Class api loading</h1>
        )
    }


}

export default ApiLoad;