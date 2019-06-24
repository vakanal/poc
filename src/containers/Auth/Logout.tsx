import * as React from "react";

import Card from "src/components/Card";
import Container from "src/components/Container";
import Title from "src/components/Title";

import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout as logoutThunk } from "../../ducks/Users";

import { History } from "history";

const styles = {
  button: {
    cursor: "pointer",
    display: "inline-block",
    margin: "10px 15px",
    textAlign: "center"
  } as React.CSSProperties,
  wrapper: {
    textAlign: "center"
  } as React.CSSProperties
};

interface ILogoutProps {
  logout: () => void;
  history: History;
}

class Logout extends React.Component<ILogoutProps> {
  public render() {
    const { logout } = this.props;
    return (
      <Container center={true}>
        <Card>
          <Title>¿Desea desconectar sesión?</Title>
          <div style={styles.wrapper}>
            <span onClick={logout} style={styles.button}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /> SI
            </span>
            <span onClick={this.handleCancel()} style={styles.button}>
              <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} /> NO
            </span>
          </div>
        </Card>
      </Container>
    );
  }

  private handleCancel = () => () => {
    const { history } = this.props;
    history.goBack();
  };
}

const mapStateToProps = (state: any) => state;

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  logout: () => dispatch(logoutThunk())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
