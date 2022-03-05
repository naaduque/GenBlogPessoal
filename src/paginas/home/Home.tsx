import React, { useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';

function Home() {
  
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
          history.push("/login")
  
      }
  }, [token])
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
                        <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} > 
                    <img src="https://media2.giphy.com/media/1wgWg37SF9FZS6tCCJ/giphy.gif" alt=" " width="640px" height="600" />
                </Grid> 
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;