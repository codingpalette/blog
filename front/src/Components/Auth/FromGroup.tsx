import React , {FormEvent} from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    input : {
        width:`100%`,
        marginBottom:10,
    },
    button : {
        width:`100%`,
    }
    
});

const Form = styled.form` width:100%; `;
const EndBox = styled.div` display:flex; margin: 20px 0; `;
const EndLine = styled.div` flex-grow: 1; flex-shrink: 1; background-color: #efefef; height: 1px; position: relative; top: .45em; `;
const EndText = styled.div` color:#999; flex-grow:0; font-size:13px; font-weight:700; margin: 0 18px; `;
const LinkBox = styled.div` text-align:right; `;
const LinkText = styled(Link)` color:#1976d2; font-size:12px; font-weight:bold; `;

type type={
    btnText : string,
    linkText : string,
};

const FromGroup = ( {btnText , linkText} : type ) => {
    const classes = useStyles();

    const onSubmit = ( e : FormEvent ) => {
        e.preventDefault();
    }
    return(
        <>
            <Form onSubmit={onSubmit}>
                <TextField className={classes.input} label="아이디" error={false} helperText="" />
                <TextField className={classes.input} label="비밀번호" type="password" autoComplete="current-password" />
                <Button className={classes.button} variant="outlined" color="primary" >
                    {btnText}
                </Button>
            </Form>
            <EndBox>
                <EndLine />
                <EndText>또는</EndText>
                <EndLine />
            </EndBox>
            <LinkBox>
                <LinkText to="/">{linkText}</LinkText>
            </LinkBox>

        </>
    ) 
};

export default FromGroup;