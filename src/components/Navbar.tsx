import * as React from "react";
import { Link } from "react-router-dom";

import { faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  link: {
    color: "#555",
    textDecoration: "none"
  },
  navbar: {
    borderBottom: "solid 1px #aaa",
    padding: "10px 15px"
  }
};

export default class Navbar extends React.Component {
  public render() {
    return (
      <div style={styles.navbar}>
        <Link style={styles.link} to="/app/newsfeed">
          <FontAwesomeIcon icon={faNewspaper} /> Instacool
        </Link>
        <div style={{ float: "right" }}>
          <Link style={styles.link} to="/app/profile">
            <FontAwesomeIcon icon={faUser} /> Perfil
          </Link>
        </div>
      </div>
    );
  }
}
