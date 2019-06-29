import React, { Component} from "react";
import { hot } from 'react-hot-loader/root';
import "./App.css";

import Child from './components/child'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {name:''};
    }
    render(){
        return(
            <div className="App">
                <h1> Hello, React-tive Aman...</h1>
                <input type="text" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}/>
                <p>{this.state.name}lala</p>
                <Child/>
            </div>
        );
    }
}

export default hot(App);
//export default App;
