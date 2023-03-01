import { Component } from 'react';

class ShouldCompoUpdate extends Component {
    constructor() {
        super();
        this.state = { name: 'onkar' };
    }

    shouldComponentUpdate(prevProps, prevState) {
        console.log('prevState.value',prevState.name,'this.state.value',this.state.name)
        if (prevState.name !== this.state.name) {
            console.log('shouldComponentUpdate')
            return true;
        }
        else {
            console.log('in else part')

            return false;
        }
    }

    changeData=(e)=>{
            this.setState({ name: e.target.value})
    }

    render() {
        console.log('in render')
        return (
            <>
                <h1>Component : {this.state.name}</h1>
                <input type="text" placeholder="enter the name" onChange={this.changeData}></input>
                {/* <button onClick={this.changeData}>Update</button> */}
            </>
        )
    }

}

export default ShouldCompoUpdate;