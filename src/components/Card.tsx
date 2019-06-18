import * as React from "react";

const style = {
  backgroundColor: "#fff",
  border: "solid 1px #ddd",
  padding: "10px 15px",
};

export default class Card extends React.Component {
  public render() {
    const { children } = this.props;
    return (
      <div style={style}>
        {children}
      </div>
    );
  }
}
