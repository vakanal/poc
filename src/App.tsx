// import "./App.css";
import * as React from "react";
import { Route } from "react-router";

import Navbar from "./components/Navbar";
import Login from "./containers/Auth/Login";
import Logout from "./containers/Auth/Logout";
import Register from "./containers/Auth/Register";
import NewsFeed from "./containers/NewsFeed";
import Profile from "./containers/Profile";

import services from "./services";

import { History } from "history";

interface IAppProps {
  history: History;
}

class App extends React.Component<IAppProps> {
  public state = {
    loading: true
  };

  public componentDidMount() {
    // tslint:disable-next-line: no-console
    console.log("Componente Montado");

    const { auth } = services;

    auth.onIdTokenChanged(user => {
      if (user) {
        // tslint:disable-next-line: no-console
        console.log("User: ", user);
      } else {
        // tslint:disable-next-line: no-console
        console.log("NO user");
      }
    });

    auth.onAuthStateChanged(user => {
      const { history } = this.props;
      if (user) {
        // tslint:disable-next-line: no-console
        console.log("User: ", user);
        if (["/", "/register"].indexOf(location.pathname) > -1) {
          history.push("/app/newsfeed");
        }
      } else {
        // tslint:disable-next-line: no-console
        console.log("NO user");
        if (/\app\/./.test(location.pathname)) {
          history.push("/");
        }
      }
      this.setState({
        loading: false
      });
    });
  }

  public componentWillMount() {
    // tslint:disable-next-line: no-console
    console.log("Componente desmontado");
  }

  public render() {
    const { loading } = this.state;
    return loading ? (
      "Cargando..."
    ) : (
      <div>
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/register" component={Register} />
        <Route exact={true} path="/logout" component={Logout} />
        <Route path="/app" component={Navbar} />
        <Route exact={true} path="/app/newsfeed" component={NewsFeed} />
        <Route exact={true} path="/app/profile" component={Profile} />
      </div>
    );
  }
}

export default App;
