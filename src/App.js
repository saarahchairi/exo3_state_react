import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      prenom:
      ["sarah", "sami", "nisrine", "nassim", "mohamed"]
    };
  }
  removeEl = () => {
    this.setState({
      prenom1 : this.state.prenom.pop() 
    });
  }
  changeColor = () => {
    switch (this.state.prenom.length) {
      case 1:
        document.body.style.backgroundColor = "orange";
        break;
    
      case 0:
        document.body.style.backgroundColor = "red";
        break;
    }
  }
  render(){
    let tableau = this.state.prenom.length;
    let tab = this.state.prenom;
    console.log(tab);
    this.changeColor();
    return(
      <div>
        <p>Mon tableau comporte {tableau} prénoms</p>
        <button onClick={() => this.removeEl()}>clique</button>
      </div>
    );
  }
}

export default App;
