import { Component } from 'react';

class CompoDidMount extends Component {
    constructor() {
        super();
        this.state = { message: 'This is my initial before calling did mount' };
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({message:'After 7 second im printed'})
        },7000)
    }

    render() {
        return (
            <h1>{this.state.message}</h1>
        )
    }

}

export default CompoDidMount;