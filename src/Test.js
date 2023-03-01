import './App.css'; 
import axios  from 'axios';

function App(props) {
console.log('props',props);

  return (
    <div className="main">
      <h2 style={{color:'red'}}>Welcome to the test file</h2>
      <h1>hii test</h1>

      <input type="text" id="name"></input>
      <button>save</button>
    </div>
  );
}

export default App;
