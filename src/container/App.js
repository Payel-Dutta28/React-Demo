import React, { Component } from "react";
import "../App.css";
import HomePage from "./HomePage";
import CreateOfferContainer from "./CreateOfferContainer";
import SearchOfferContainer from "./SearchOfferContainer";
import RciUiElements from "./RciUiElements";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  }
};

const browserHistory = createBrowserHistory();
class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    redirect: false,
    comp: "xxx"
  };
  setRedirect = val => {
    this.setState({
      redirect: true,
      comp: val
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      if (this.state.comp == "Home") {
        return <Redirect push to="/Home" />;
      } else if (this.state.comp == "cyz") {
        return <Redirect push to="/CreateOfferContainer" />;
      }
    }
  };
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <AppBar position="static">
            <Toolbar variant="dense">
              {this.renderRedirect()}
              {/* <Button
                aria-haspopup="true"
                color="inherit"
                onClick={() => this.setRedirect("cyz")}
              >
                CreateOffer
              </Button>
              <Button
                aria-haspopup="true"
                color="inherit"
                onClick={() => this.setRedirect("Home")}
              >
                Home
              </Button> */}
              <ul>
                <li>
                  <NavLink to="/" exact activeStyle={{ color: "white" }}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/RciUiElements"
                    exact
                    activeStyle={{ color: "white " }}
                  >
                    Rci UI Elements
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/CreateOfferContainer"
                    exact
                    activeStyle={{ color: "white " }}
                  >
                    Create Offer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/SearchOfferContainer"
                    exact
                    activeStyle={{ color: "white " }}
                  >
                    Search Offer
                  </NavLink>
                </li>
              </ul>
            </Toolbar>
          </AppBar>
          <div className="content">
            <Route exact path="/" component={HomePage} />
            <Route
              path="/CreateOfferContainer"
              component={CreateOfferContainer}
            />
            <Route path="/RciUiElements" component={RciUiElements} />
            <Route
              path="/SearchOfferContainer"
              component={SearchOfferContainer}
            />
            <Route path="/Home" component={HomePage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
