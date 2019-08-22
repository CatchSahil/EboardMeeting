import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Footer } from './components/Footer';
import { Login } from './Login';
import { Signup } from './Signup';
import { Header } from './components/Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header/>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;