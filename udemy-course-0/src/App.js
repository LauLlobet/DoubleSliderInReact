import React from 'react';
import { Component } from  'react';
import { Button} from 'react-bootstrap';


class HelloWorld extends Component {
  render(){
    return (<p>
              Hello world { this.props.isGreat 
              ? "!!!!"
              : ""
            }
          </p>);
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = { onoff: false}
  }

  switchContent = () => {
    this.setState({onoff: ! this.state.onoff})
  }

  setContent = (content) => {
    this.setState({onoff: content})
  }

  render () {
    const {onoff} = this.state;
    return (
        <div className="App">
          <Button onClick={this.switchContent}>SendOnOffToChild</Button>
          {JSON.stringify(onoff)}
          <HelloWorld isGreat={onoff}/>
          <Formulario tellParent={this.setContent}/>
        </div>
      );
    }
}

class Formulario extends Component {
  constructor(props) {
    super(props)
    this.tellParent = props.tellParent;
    this.state = { hasanA: false, text: "write here" }
  }

  handleChange = (e) => {
      const input = e.target.value;
      this.setState({text: input, hasanA: input.includes("a")})
      console.log(this.state.hasanA);
      this.tellParent(input.includes("a"));
  }

  render() {
        return (
        <form>
             <label>
                Name:
                <input type="text" name="name" value={this.state.text} onChange={this.handleChange}/>
              </label>
              {this.state.hasanA ? <div>has an A</div> : null}
          </form>
      );
    }
}


export default App;
