import React from 'react';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';


const Card = styled.div`
    padding:16px;
    display: flex;
    overflow: hidden;
    position:relative;
    border: 1px none #e6ecf1;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 6px 28px 0 rgba(24, 52, 117, 0.2);
    transition: all 200ms ease;
    &:hover{
        box-shadow: 0 7px 23px 0 rgba(24, 48, 85, 0.22);
        transform: scale(1.05);
    }
`;


const BlogPresenter = () => {
    
    return(
        <>  
            <div className="container">
                <Grid item xs={12} sm={6}>
                    <Card>
                        fsdsdf
                    </Card>
                </Grid>
            </div>
        </>
    )
};

export default BlogPresenter