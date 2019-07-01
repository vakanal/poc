import * as React from "react";

import Card from "src/components/Card";
import Container from "src/components/Container";
import LoginForm from "src/components/LoginForm";
import Title from "src/components/Title";

import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { ILogin, login as loginThunk } from "../../ducks/Users";

interface ILoginProps {
  login: (a: ILogin) => void;
  data: any;
  errorMessage: any;
}

class Login extends React.Component<ILoginProps> {
  constructor(props: ILoginProps) {
    super(props);
  }

  public render() {
    const { login, errorMessage } = this.props;
    return (
      <Container center={true}>
        <Card>
          <Title>Iniciar sesión</Title>
          <LoginForm onSubmit={login} />
          {errorMessage ? <h3>{errorMessage.message}</h3> : undefined}
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  const {
    Users: { data, errorMessage }
  } = state;
  return {
    data,
    errorMessage
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  login: (payload: ILogin) => dispatch(loginThunk(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
