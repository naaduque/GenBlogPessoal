import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs className="backgroundColor"  centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todos os posts" value="1"/>
            <Tab label="Sobre mim" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>

        <TabPanel value="2">
          <Box display="flex" flexDirection="row">
            <Box padding={5}>
              <Typography variant="body1" gutterBottom align="justify" className='aboutme'>Meu nome é Natalia. Gosto de gatos, jogos, tecnologia e de escutar música. Se você quiser criar um post, fique à vontade. Pode me contar qual é seu filme favorito, por exemplo. Ou me contar o que você mais gosta de fazer. Uma das minhas animações favoritas é Adventure Time, aqui tem mais alguns personagens bonitinhos:
              </Typography>
            </Box>
            <Box>
              <img src="https://i.imgur.com/34VxyW5.gif" className='gifjake' alt="Jake" />
            </Box>
            <Box> 
            <img src="https://i.imgur.com/ggeWI1o.gif" className='gifbeemo' alt="Beemo" />
            </Box>
          </Box>
        </TabPanel>

      </TabContext>
    </>
  );
}
export default TabPostagem;