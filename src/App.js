import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {

  const BlueButton = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.otherColor.main,
    color:"#888",
    margin:5,
    "&:hover":{
      backgroundColor:"lightblue"
    },
    "&:disabled":{
      backgroundColor:"gray",
      color:"white"
    },
  }));
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings/>} variant="contained" color="secondary" size="small">SETTINGS</Button>
      <Button startIcon={<Add/>} variant="contained" color="otherColor" size="small">ADD NEW POST</Button>
      <Button variant="outlined" disabled>Outlined</Button>
      <Typography variant="h1" component="h2">
        It uses h1 style but it's a p tag
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>Another Button</BlueButton>
    </div>
  );
}

export default App;
