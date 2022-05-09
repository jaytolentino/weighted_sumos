import * as React from 'react';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { DefaultTheme } from 'styled-components';
import { ThemeProvider } from '@zendeskgarden/react-theming';

import { PathKey, urlForPathKey } from 'lib/paths';

import Routes from './Routes';
import { AppTheme } from './theme';

const railsCsrfToken = document
  .querySelector("meta[name=csrf-token]")
  ?.getAttribute("content");

const Client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: urlForPathKey(PathKey.graphql),
    headers: {
      "X-CSRF-Token": railsCsrfToken,
    },
  }),
});

const App: React.FC = () => {
  return(
    <ApolloProvider client={Client}>
      <ThemeProvider theme={AppTheme as DefaultTheme}>
        <Routes />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;