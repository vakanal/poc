import * as React from "react";

const styles = {
  img: {
    borderRadius: "100%"
  }
};

export default class ProfileImg extends React.Component {
  public render() {
    const imageUrl: string = "https://placekitten.com/100/100";
    return (
      <div>
        <img style={styles.img} src={imageUrl} />
      </div>
    );
  }
}
