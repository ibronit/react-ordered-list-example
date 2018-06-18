import React from "react";

const sort = "Sort";
const reverse = "Reverse";

export default class OrderButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: sort
    };
    this.handleClick = this.handleClick.bind(this, sort, reverse);
  }

  handleClick() {
    const method =
      this.state.order === sort ? this.props.sort() : this.props.reverse();

    console.log(this.sort);

    this.setState({
      order: this.state.order === sort ? reverse : sort
    });

    return method;
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.order}</button>;
  }
}
