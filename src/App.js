import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'; 
import CharacterList from "./components/CharacterList/CharacterList"
import CharacterCard from './components/CharacterCard/CharacterCard';
import Home from "./components/Home/Home";
import About from "./components/About/About"
function App(props) {
  console.log(props)
  return (
    <div className="App">
    <Switch>
    <Route path="/" exact {...props}  component={Home} />
    <Route path="/chars" exact {...props} component={CharacterList} />
    <Route path="/chars/:id" {...props} component={CharacterCard} />
    <Route path="/about" component={About} />
    </Switch>
    </div>
  );
}

export default App;
