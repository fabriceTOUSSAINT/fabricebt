import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import GlobalStyles from './GlobalStyles';

import App from './App';
import reportWebVitals from './reportWebVitals';

const token = localStorage.getItem('api_token');

const client = new ApolloClient({
  uri: process.env.REACT_APP_CMS_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
