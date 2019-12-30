import React from 'react';
import styled from 'styled-components';

import FromGroup from '../Components/Auth/FromGroup';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    card: {
        minWidth: 275,
        maxWidth:345,
    },   
});


const Container = styled.div`
    width:100%;
    height:100vh;
    padding:58px 10px 10px;
    box-sizing:border-box;
    display:flex;
    align-items:center;
    justify-content:center;
`;


const Login = () => {
    const classes = useStyles();
    return(
        <>
            <Container>
                <Card className={classes.card}>
                    <CardContent>
                        <FromGroup
                            btnText={'로그인'}
                            linkText={'회원가입'}
                        ></FromGroup>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
};

export default Login;