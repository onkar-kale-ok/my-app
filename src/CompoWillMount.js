import { Component } from 'react';

class CompoWillMount extends Component {
    constructor() {
        super();
        this.state = { message: 'This is my initial phase' ,message2:'this is msg2'};
    }

    componentWillMount() {   // before loading component in DOM 
        this.setState ({ message2: 'This is my updated phase by will mount' });
    }

    render() {
        return (
            <>
            <h1>{this.state.message}</h1>
            <h2>{this.state.message2}</h2>
            </>
        )
    }

}

export default CompoWillMount;