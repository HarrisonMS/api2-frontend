import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Posts from './components/Posts'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/posts" component={Posts} />
      </div>
    </Router>
  );
}

export default App;
