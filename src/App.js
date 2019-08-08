import React, { Component } from "react";
import "./App.css";
import ListItem from "./components/ListItem";
import AddThingForm from "./components/AddThingForm";

class App extends Component {
  state = {
    things: ["Tomato", "metallica tshirt", "toothbrush"]
  };

  addToThings = thing => {
    this.setState(prevState => {
      return { things: [...prevState.things, thing] };
    });
  };

  fireworks = () => {
    alert("BOOOOOOMMM!!!!");
  };

  beingSad = () => {
    console.log("Im out of cookies");
  };

  render() {
    return (
      <div className="App">
        <div>
          <h2>Hello</h2>
          <p>
            Loreuim dskgjsdlkfghj lfjsdhg ksdhfsdi s fdsh ds hkads fksdfj kjfds
            kj gjdfsv kjdfshgkjdsfh hg fdklgv dfs
          </p>
          <AddThingForm amountOfStuff={this.state.things.length+1} onAddToAppState={this.addToThings}/>
          <ul>
            {this.state.things.map(item => {
              return <ListItem onClickBoom={this.fireworks} data={item} />;
            })}
            <ListItem onClickBoom={this.beingSad} data="boring object" />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
