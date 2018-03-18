import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import CssBaseline from 'material-ui/CssBaseline';

const Header = () => <p>Header</p>;
const Landing = () => <h1>Landing</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const AddLoan = () => <h1>Add Loan</h1>;

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Landing} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/addloan" component={AddLoan} />
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
