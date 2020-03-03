import React from 'react';
import './App.css';
import SetlistrProvider from './components/SetlistrProvider'

import logo from './assets/logo.png'

import { Pane, Text, Heading, majorScale, defaultTheme, ThemeProvider } from 'evergreen-ui'

import Data from './components/Data'

const newTheme = {
  fontFamily: 'Oxanium',
  ...defaultTheme
  
}

function App() {
  return (
    <div className="App">
      <ThemeProvider value={newTheme}>
        <SetlistrProvider>
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width='100%'
            height='100px'
            margin={majorScale(1)}
            paddingX={majorScale(4)}
          >
            <img 
                    alt='company logo' 
                    height='100px'  
                    src={logo}
                />
            <Heading 
              size={700}
            >
              Setlistr.io
            </Heading>
          </Pane>
          <Pane>
            <Data> 
            </Data>
          </Pane>
        </SetlistrProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
