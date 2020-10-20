/**
 * Import React and necessary libraries
 */
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
/**
 * Import pages - We'll only have two pages:
 * (1) the home page and (2) the article page
 */
import HomePage from "./pages/HomePage"
import ArticlePage from "./pages/ArticlePage"
import "./App.css";
class App extends Component{
  render(){
    return(
      <Router>
          <Route path="/" component={HomePage} exact/>
          <Route path="/article"/>
      </Router>
    )
  }
}
export default App;

