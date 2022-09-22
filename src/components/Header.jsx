import { AppBar, Avatar, Fab, IconButton, InputAdornment, Stack, TextField, Toolbar, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

export default function Header(props) {

  
 

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Stack direction="row" spacing={2} >
          <IconButton > <DehazeIcon sx={{ color: "black", fontWeight: "bold", background: "transparent" }} /></IconButton>

          <Fab color='primary' size='small' > <PersonIcon /></Fab>
          <Typography variant='h5' color="black" >Contact</Typography>
        </Stack>

        <TextField onChange={(e) => props.search(e.target.value)} size='small' sx={{ width: "50%", ml: 6, mr: 35 }} placeholder="Search"
         InputProps={{ endAdornment: (<InputAdornment position="end">   <SearchIcon /> </InputAdornment>) }} />
        <Stack direction="row" spacing={3} >
          <IconButton  ><HelpOutlineIcon sx={{ color: "black", fontWeight: "bold", background: "transparent" }} /></IconButton>
          <IconButton  ><SettingsIcon sx={{ color: "black", fontWeight: "bold", background: "transparent" }} /></IconButton>
          <IconButton  ><AppsIcon sx={{ color: "black", fontWeight: "bold", background: "transparent" }} /></IconButton>
          <Avatar src='/av.jpg' size="small" />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}