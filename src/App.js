import React from 'react';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
// IGo with capitalized I because React PureComponents need to start with capitalized letter
import IGo from "./iGo/iGo"

const styles = theme => ({
  root: {
    backgroundColor: "#282c34",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh"
  }
});


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

function App({classes}) {
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <IGo/>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
