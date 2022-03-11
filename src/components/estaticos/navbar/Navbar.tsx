import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" className="backColor">
            <Toolbar variant="dense" className='bar'>
                <Box>
                    <Link to="/home" className='text-decorator-none'>
                        <Typography variant="h6" className='titulo'>
                            OManualDoHerói
                        </Typography>
                    </Link>
                </Box>

                <Box display="flex">
                    <Box className='m'>
                        <Link to="/home" className='text-decorator-none text-color'>
                            <Button color="inherit" style={{ color: 'white' }}>home</Button>
                        </Link>
                    </Box>

                    <Box className='m'>
                        <Link to='/posts' className='text-decorator-none text-color'>
                            <Button color="inherit">posts</Button>
                        </Link>
                    </Box>

                    <Box className='m'>
                        <Link to='/temas' className='text-decorator-none text-color'>
                            <Button color="inherit">temas</Button>
                        </Link>
                    </Box>

                    <Box className='m'>
                        <Link to='/formularioTema' className='text-decorator-none text-color'>
                            <Button color="inherit">cadastrar temas</Button>
                        </Link>
                    </Box>
                </Box>

                <Box mx={1} className='cursor' onClick={goLogout}>
                    <IconButton>
                        <MeetingRoomIcon style={{ fontSize: 30, color: 'white' }} />
                    </IconButton>
                </Box>



            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;