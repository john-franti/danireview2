import React, { Component } from "react";

class AddThingForm extends Component {
  state = {
    thingImTyping: ""
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onAddToAppState(this.state.thingImTyping);
    this.setState({thingImTyping: ""})
  };

  handleTyping = e => {
    this.setState({ thingImTyping: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>Add to your {this.props.amountOfStuff} objects: </label>
        <input
          value={this.state.thingImTyping}
          type="text"
          onChange={this.handleTyping}
        />
        <button>Submit thing</button>
      </form>
    );
  }
}

export default AddThingForm;
