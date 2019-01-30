import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import configureStore from './store';
import client from './utils/graphqlClient';
import Main from './components/Main';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  </Provider>,
  document.getElementById('main'),
);
