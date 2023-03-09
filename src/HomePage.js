import { Link } from 'react-router-dom';

function HomePage(props) {

    console.log('props', props);

    return (
        <div style={{backgroundColor:'cyan'}}>
            <h1>My home page</h1>
            <ul>
                <li > <Link to="/loginpage">Login</Link></li>
                <li > <Link to="/about">About</Link></li>
                <li > <Link to="/contact">contact</Link></li>
            </ul>


            </div>
    )

};

export default HomePage;