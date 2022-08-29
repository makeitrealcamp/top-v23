import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Card from './component/Card';

class App extends Component {
  state = {
    isShow: true,
    title: 'Rick Sanchez',
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     isShow: false,
  //   }

  //   // this.handleClick = this.handleClick.bind(this);
  // }

  handleClick = () => {
    console.log('click', this);
    this.setState({
      isShow: !this.state.isShow,
      title: 'Morty Smith',
    })
  }

  // handleClick() {
  //   console.log('click', this);
  //   this.setState({
  //     isShow: !this.state.isShow,
  //   })
  // }


  render() {
    const { isShow, title } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {
            isShow ? <img src={logo} className="App-logo" alt="logo" /> : null
          }
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <Card title={title} text="Esto es un texto" />

          <button onClick={this.handleClick}>
            {
              isShow ? 'Hide' : 'Show'
            }
          </button>
        </header>
      </div>
    );
  }
}

export default App;
