import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {currentEvent: '---'}
    this.update = this.update.bind(this)
  }
  update( e ){
    this.setState({ currentEvent: e.type })
  }
  render(){
    return (
      <div>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
          cols="30"
          rows="10"/>
          <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       txt: 'this is the state text'
//     }
//   }
//   update( e ){
//     this.setState({ txt: e.target.value });
//   }
//   render(){
//     let txt = this.props.txt;
//     return (
//       <div>
//         <textarea
//           cols="30"
//           rows="10"/>
//         <h1>{this.state.currentEvent}</h1>
//       </div>
//       <div>
//         <Button>I <Heart /> React</Button>
//         <h2>{this.state.txt}</h2>
//         <Widget update={this.update.bind(this)}/>
//         <Widget update={this.update.bind(this)}/>
//         <Widget update={this.update.bind(this)}/>
//         <h1><em>{txt}</em></h1>
//         <h2>Some more cool text!</h2>
//       </div>
//     )
//   }
// };

// const Button = (props) => <button>{props.children}</button>
//
// class Heart extends React.Component {
//   render() {
//     return <span>&hearts;</span>
//   }
// }
//
//
// const Widget = (props) =>
// <input type="text" onChange={props.update}/>
//
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//   txt: 'This is the default text.'
// }

export default App;
