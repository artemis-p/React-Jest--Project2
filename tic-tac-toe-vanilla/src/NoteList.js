import React, { Component } from "react";

class NoteList extends Component{
  constructor(props) {
    super(props); {
      this.state = {value: '', notes: []};
      this.handleChange = this.handleChange.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event); {
      this.setState({value: Event.target.value});
    }

    handleSubmit(event); {
      this.state.notes.push(this.state.value)
      this.setState({notes: this.state.notes});
      event.preventDefault();
    }
  }

  render(){
    return(
      <div className="NoteList">
        <form onSubmit={this.handleSubmit}>
          <label>
            Add note: <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.notes.map( (note, index) => {
          return (
            <p key={index}>{note}</p>
          )
        })}
      </div>
    )
  }
}

export default NoteList