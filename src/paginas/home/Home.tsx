import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={20} className="textHome">
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Olá, seja bem vindo!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h4" align="center" className='titulo'>Diga alguma coisa :</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>

                </Grid>
                {/*<Grid item xs={6} > */}
                    {/*<img src="https://th.bing.com/th/id/OIP.int26JdeIopr3mvVRFiFcwHaEK?pid=ImgDet&rs=1" alt=" " width="320px" height="200" />*/}
                {/*</Grid> */}
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;