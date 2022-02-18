import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center" className="homeBG">
                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={20} className="textHome">
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Olá!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h4" align="center" style={{ color: "white", fontWeight: "bold" }}>Diga alguma coisa :</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "crimson" , color: "white" }}>Ver Postagens</Button>
                    </Box>

                </Grid>
                {/*<Grid item xs={6} > */}
                    {/*<img src="" alt=" " width="320px" height="200" />*/}
                {/*</Grid> */}
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;