import React, { Component } from "react";
import { connect } from "react-redux";
import todosActions from "../redux/todos/todos_actions";

class TodoEditor extends Component {
  state = {
    message: "",
  };
  handleChange = (event) => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor_textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor_button">
          Save
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(todosActions.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
