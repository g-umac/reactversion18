import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
const NavBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="All" icon={<HomeMaxIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    <BottomNavigationAction label="Recent"  icon={<RestoreIcon />} /> 
      </BottomNavigation>
    </Box>
  );
}

export default NavBar