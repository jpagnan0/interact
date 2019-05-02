import { AppContainer } from "react-hot-loader";
import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore, { history } from "../configureStore";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";
import _ from "lodash";
const store = configureStore();
const coef = 0.1;
const modifyRem = (value, coef) => {
  return `${parseFloat(value) * (1 + coef)}rem`;
};


const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    type: "dark",
    primary: colors.blueGrey,
    secondary: colors.indigo
  }
});

_.each(theme.typography, (variant, variantName) => {
  if (typeof variant !== 'object') {
    return variant;
  }
  theme.typography[variantName] = {
    ...variant,
    fontSize: modifyRem(variant.fontSize, -coef * 5),
    [theme.breakpoints.down('x,xs')]: {
      fontSize: modifyRem(variant.fontSize, -coef * .25),
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: modifyRem(variant.fontSize, -coef * 2.5),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: modifyRem(variant.fontSize, -coef * 1),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: modifyRem(variant.fontSize, 0),
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: modifyRem(variant.fontSize, coef),
    },
  };
});

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer>
          <Provider store={store}>
            <App history={history} />
          </Provider>
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}
export default Root;
