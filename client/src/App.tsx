import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Short from './Short';
import CreateFontAwesomeLibrary from './font-awesome-library';

const App: React.FC = () => {
  const [longUrl, setLongUrl] = useState();
  const [shortUrl, setShortUrl] = useState();
  const [error, setError] = useState();
  
  useEffect(() => {
    CreateFontAwesomeLibrary();
  }, []);

  return (
    <Router>
      <Switch>
          <Route path="/s/:id" render={(props) => {
              return (
                <Short url={props.match.params.id} />
              )
            }} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
