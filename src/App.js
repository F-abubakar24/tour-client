import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>


          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
