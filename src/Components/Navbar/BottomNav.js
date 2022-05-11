import React,{useEffect,useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate,} from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';



export default function SimpleBottomNavigation() {
  //const ref = React.useRef(null);
  const [value, setValue] = useState();
  const navigate=useNavigate();

  useEffect(() => {
    //ref.current.ownerDocument.body.scrollTop = 0;
    if(value === 0 ){
      navigate("/home");
      //setValue(0);
      //<Link to="/home"></Link>
    }

    else if(value === 1 ){
    navigate("/search");
    //setValue(1);
    //<Link to="/list"></Link>
  }

//     else if(value === 2 ){
//       navigate("/search");
//       //setValue(2);
//       //<Link to="/search"></Link>
// }
      
  }, [value, navigate])
  

  return (
    <Box>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,backgroundColor: "#EC994B" }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        
      </BottomNavigation>
      </Paper>
    </Box>
  );
}
