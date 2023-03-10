import axios from "axios";
import { useEffect, useState } from "react";

function UseEffectCompo(props) {

    console.log('props',props);
    const [movieDetails,setMovieDetails] = useState([]);

    useEffect(async () =>{
        console.log('UseEffectCompo');
        let response = await axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war');
        console.log('response',response);
        setMovieDetails(response.data.Search)
    },[])

    return(
        <h1>Learn how to fetch data on load of the page</h1>
    )
    
};

export default UseEffectCompo;