import React from 'react';
import './App.css';
import Page from './components/Page'

import logo from './assets/logo.png'

import { Pane, Text, Heading, majorScale, defaultTheme, ThemeProvider } from 'evergreen-ui'

import Data from './components/Data'

const newTheme = {
  ...defaultTheme,
  fontFamily: 'Oxanium'
}

function App() {
  return (
    <div className="App">
      <ThemeProvider value={newTheme}>
        <Page>
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width='100%'
            height='100vh'
            margin={majorScale(1)}
          >
            <img src={logo} className="App-logo" alt="logo" />
            <Heading size={900} marginTop="default">Setlistr.io</Heading>
          </Pane>
          <Data/>
        </Page>
      </ThemeProvider>
    </div>
  );
}

export default App;
