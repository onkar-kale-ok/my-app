import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
 
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import LoginPage from './LoginPage';
import PageNotFound from './PageNotFound';
import Dashboard from './Dashboard';

function RouterComp(params) {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/loginpage" element={<LoginPage/>} />
            <Route path="/dashboard" element={<Dashboard/>} />

            <Route path="*" element={<PageNotFound/>}  />
        </Routes>
    </Router>
    )
}

export default RouterComp;