import * as React from "react";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HotelIcon from "@mui/icons-material/Hotel";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WcIcon from "@mui/icons-material/Wc";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import "./style.css";

function SwipeableTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
      <Drawer
        className="drawer"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onClick={() => setOpen(false)}
        // onOpen= {() => {}}
      >
        <div>
          <List>
              <ListItem className = "drawer-item" button component={Link} to="/home">
                <ListItemIcon>
                  <HomeIcon className = "drawer-item"/>
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
              <ListItem className = "drawer-item" button component={Link} to="/restaurants">
                <ListItemIcon>
                  <RestaurantIcon className = "drawer-item"/>
                </ListItemIcon>
                <ListItemText primary={"Restaurants"} />
              </ListItem>

              <ListItem className = "drawer-item" button component={Link} to="/hotels">
                <ListItemIcon>
                  <HotelIcon className = "drawer-item"/>
                </ListItemIcon>
                <ListItemText primary={"Hotels"} />
              </ListItem>
              <ListItem className = "drawer-item" button component={Link} to="/bathrooms">
                <ListItemIcon>
                  <WcIcon className = "drawer-item"/>
                </ListItemIcon>
                <ListItemText primary={"Bathrooms"} />
              </ListItem>

              <ListItem
               className = "drawer-item"
                button
                component={Link}
                to="/shops"
              >
                <ListItemIcon>
                  <StoreIcon className = "drawer-item"/>
                </ListItemIcon>
                <ListItemText primary={"Shops"} />
              </ListItem>

              <ListItem
               className = "drawer-item"
                button
                component={Link}
                to="/weather"
              >
                <ListItemIcon>
                  <WbSunnyIcon className = "drawer-item"/>
                </ListItemIcon>
                <ListItemText primary={"Weather"} />
              </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default SwipeableTemporaryDrawer;
