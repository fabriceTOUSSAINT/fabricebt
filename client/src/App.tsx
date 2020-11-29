import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Navigation from './components/Navigation';

// Screens
import Blog from './screens/Blog';

import { useLoginMutation } from './generatedTypes';

const {
  REACT_APP_CMS_CLIENT_KEY, // TODO: find better way to do this.
  REACT_APP_CMS_CLIENT_USERNAME
}  = process.env;

function App() {

  const [fetchJWT] = useLoginMutation({
    variables: {
      input: {
        identifier: REACT_APP_CMS_CLIENT_USERNAME ?? '',
        password: REACT_APP_CMS_CLIENT_KEY ?? ''
      }
    },
    onCompleted: (data) => {
      if(data?.login?.jwt) {
        localStorage.setItem('api_token', data?.login.jwt)
      }
    }
  });

  useEffect(() => {
    fetchJWT();
  },[fetchJWT])


  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/blog' component={Blog} />
        <Route path='/' component={Blog} />
        <Route path='*' component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
