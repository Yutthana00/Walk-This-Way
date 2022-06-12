import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';


const Header = () => {
  return (
    <React.Fragment>
      <AppBar sx ={{background: "#000000"}}>
        <Toolbar>
          <Typography>
            LOGO
          </Typography>
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};


export default Header;
