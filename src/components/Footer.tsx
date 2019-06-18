import * as React from "react";

import { faRetweet, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  button: {
    cursor: "pointer",
    flex: "1",
    padding: "10px 15px",
    textAlign: "center"
  } as React.CSSProperties,
  footer: {
    backgroundColor: "#eee",
    display: "flex",
    marginBottom: "-10px",
    marginLeft: "-15px",
    width: "calc(100% + 30px)"
  }
};

interface IFooterProps {
  like: () => void;
  share: () => void;
}

export default class Footer extends React.Component<IFooterProps> {
  public render() {
    const { like, share } = this.props;
    return (
      <div style={styles.footer}>
        <div onClick={like} style={styles.button}>
          <FontAwesomeIcon icon={faThumbsUp} />
          &nbsp;Like
        </div>
        <div onClick={share} style={styles.button}>
          <FontAwesomeIcon icon={faRetweet} />
          &nbsp;Compartir
        </div>
      </div>
    );
  }
}
