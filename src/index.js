import React from "react";
import ReactDOM from "react-dom";
import OrderButton from "./OrderButton";

const List = props => {
  const list = props.list.map(function(element) {
    return <li>{element}</li>;
  });
  return <ul>{list}</ul>;
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["feri"],
      input: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sortList = this.sortList.bind(this);
    this.reverseList = this.reverseList.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  sortList() {
    const list = this.state.list.sort();
    this.setState((list: list));
  }

  reverseList() {
    const list = this.state.list.reverse();
    this.setState((list: list));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add" />
        </form>
        <OrderButton reverse={this.reverseList} sort={this.sortList} />
        <List list={this.state.list} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
