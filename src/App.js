import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Footer } from './components/Footer';
import { Login } from './Login';
import { Signup } from './Signup';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Body } from './components/Body';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header/>
          <Body />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </Layout>
          <br/>

          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;