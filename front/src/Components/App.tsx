import React from 'react';

import GlobalStyles from './GlobalStyles'
import { createMuiTheme , ThemeProvider   } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './Router';

const App = () => {
    const theme = createMuiTheme({
        palette: {
            type: 'light', // Switching the dark mode on is a single property value change.
            primary: {
                light: '#ec407a',
                main:  '#ec407a',
                dark: '#ec407a',
                contrastText: '#fff',
            },
        },
    });
    console.log(theme.palette.primary)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Router></Router>
        </ThemeProvider>
    );
}

export default App;
