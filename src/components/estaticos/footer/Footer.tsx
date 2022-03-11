import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token != ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className='box1'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h6" align="center" gutterBottom className='textos'>Me siga nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://github.com/naaduque" target="_blank" className='marg'>
                        <GitHubIcon className='redegit' />
                    </a>
                    <a href="https://www.linkedin.com/in/natalia-ferreira-duque/" target="_blank" className='marg'>
                        <LinkedInIcon className='redes' />  
                    </a>
                </Box>
            </Box>
            <Box className='box2'>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2022 Copyright:</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://www.instagram.com/naaduque/">
                        <Typography variant="subtitle2" gutterBottom className='textos' align="center">nataliaduque</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;