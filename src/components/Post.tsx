import * as React from "react";
import Footer from "./Footer";

const styles = {
  divStyle: {
    backgroundColor: "#fff",
    border: "solid 1px #ddd",
    marginBottom: "10px",
    padding: "10px 15px"
  },
  imgStyle: {
    height: "200px",
    width: "300px"
  }
};

interface IPostProps {
  like: () => void;
  share: () => void;
  image: string;
}

export default class Post extends React.Component<IPostProps> {
  public render() {
    const { image, like, share } = this.props;
    return (
      <div style={styles.divStyle}>
        <img style={styles.imgStyle} src={image} />
        <Footer like={like} share={share} />
      </div>
    );
  }
}
