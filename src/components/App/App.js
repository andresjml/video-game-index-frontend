import './App.css'
import {Switch, Route} from "react-router-dom"
import Home from "../Home/Home"
import NavBar from "../NavBar/NavBar"
import GamesContainer from "../GamesContainer/GameContainer"
import Genres from "../Genres/Genres"
import Platforms from '../Platform/Platforms'

function App() {


  return (
    <div className="bg-transparent">              
       <NavBar />
       <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path='/games/'>
              <GamesContainer />
          </Route>
          <Route path='/genres/'>
              <Genres />
          </Route>
          <Route path='/platforms/'>
              <Platforms />
          </Route>
          <Route path="*">
              <h1> 404 not found</h1>
          </Route>
       </Switch>
    </div>   
  );
}

export default App;
