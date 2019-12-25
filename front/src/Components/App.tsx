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
                light: '#757ce8',
                main:  '#ec407a',
                dark: '#002884',
                contrastText: '#fff',
            },
        },
    });
    console.log(theme.palette.type)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Router></Router>
        </ThemeProvider>
    );
}

export default App;
