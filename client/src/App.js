import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CreatePost from './pages/CreatePost';
class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route path='/blog' component={Blog} /> 
          <Route exact path='/' component={Home}/>
          <Route path="/create/post" component = {CreatePost} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;