import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import './App.css';
// IGo with capitalized I because React PureComponents need to start with capitalized letter
import IGo from "./iGo/iGo";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    text: {
      secondary: "white"
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <IGo/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
