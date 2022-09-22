import { Button, Dialog, DialogActions, DialogContent,  DialogTitle, Fab, Grid, ListItemAvatar, TextField } from '@mui/material';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/system';

import Contactlist from './data/Contactlist';
import { useState } from 'react';


function App() {

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")

  const [data,setData] = useState(Contactlist);
  const [tempData,setTempData] = useState([]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInsert = () => {
    let newArray = {id:data.length+1, name:name,number:contact,email:email,address:address};
    setData([...data,newArray]);
    console.log(data);
    
  }
  const handleDelete=(id)=>{
    let newArray = data.filter((value)=> value.id !==id);
    setData(newArray);

  }

  const [search,setSearch] =useState('');
  const handleSearching = (searchValue) => {
    setSearch(searchValue);
    if(searchValue !=""){
      setTempData(data.filter((item) => {
        if(item.name.toLowerCase().includes(searchValue.toLowerCase())){
          return item;
        }
      }));
    }
    else{
      setTempData(data);
    }
  }

  return (
    <>
      <Header search={(d)=>handleSearching(d)}/>
      <Content searchData={tempData} contactData={data} handleDelete={(id)=>handleDelete(id)}/>
      <Container>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Contact Add</DialogTitle>
          <DialogContent>
            <Grid sx={{display:"flex"}} spacing={1}>
              <TextField fullWidth placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>

            <Grid spacing={1} sx={{marginTop:2,display:"flex"}}>
              <TextField fullWidth placeholder='Contact' value={contact}  onChange={(e) => setContact(e.target.value)}/>
            </Grid>
            <Grid spacing={1} sx={{marginTop:2,display:"flex"}}>
              <TextField fullWidth placeholder='Email' value={email}  onChange={(e) => setEmail(e.target.value)}/>
            </Grid>
            <Grid spacing={1} sx={{marginTop:2,display:"flex"}}>
              <TextField fullWidth placeholder='Address' value={address}  onChange={(e) => setAddress(e.target.value)}/>
            </Grid>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => handleInsert()} variant="contained" color="error">Add Now</Button>
          </DialogActions>
        </Dialog>



        <Fab color='primary' onClick={handleClickOpen} aria-label='add' sx={{ position: "absolute", right: 40, bottom: 30 }}>
          <AddIcon />
        </Fab>
      </Container>
    </>
  );
}

export default App;