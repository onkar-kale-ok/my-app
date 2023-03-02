import { PureComponent } from 'react';

class PureComp extends PureComponent {
    constructor() {
        super();
        this.state = { name: 'onkar' };
    }

    changeData=(e)=>{
            this.setState({ name: e.target.value})
    }

    render() {
        console.log('componenet is re rerendered')
        return (
            <>
                <h1>name Heading : {this.state.name}</h1>
                <input type="text" placeholder="enter the name" onChange={this.changeData}></input>
                {/* <button onClick={this.changeData}>Update</button> */}
            </>
        )
    }

}

export default PureComp;
