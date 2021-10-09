import * as React from 'react';
import {useState} from "react";
import Drawer from '@mui/material/Drawer';
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WcIcon from '@mui/icons-material/Wc';
import StoreIcon from '@mui/icons-material/Store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-router-dom";


function SwipeableTemporaryDrawer (props) {
    const[open, setOpen] = useState(false);
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
                anchor = "left"
                open= {open}
                onClose = {() => setOpen(false)}
                // onOpen= {() => {}}
            >
            <div>
                <List>
                    <Router>
                       
                    <ListItem button component={Link} to="/home">
                    <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                    <ListItem button component={Link} to="/restaurants">
                    <ListItemIcon>
                            <RestaurantIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Restaurants"}/>
                    </ListItem>

                    <ListItem button component={Link} to="/hotels">
                    <ListItemIcon>
                            <HotelIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Hotels"} />
                    </ListItem>
                    <ListItem button component={Link} to="/bathrooms">
                    <ListItemIcon>
                            <WcIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Bathrooms"} />
                    </ListItem>
        
                    <ListItem>
                    <ListItemIcon>
                            <StoreIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Shops"} />
                    </ListItem>
                    <ListItem className={window.location.pathname === "/weather" ? "nav-link active" : "nav-link"} button component={Link} to="/weather">
                    <ListItemIcon>
                            <WbSunnyIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Weather"} />
                    </ListItem>
                    </Router>
                </List>
            </div>
            </Drawer>

        </div>
    )
}

export default SwipeableTemporaryDrawer;

// import * as React from "react";
// import IconButton from "@mui/material/IconButton";



// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// const options = ["About Me"];

// export default function SwipeableTemporaryDrawer() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <IconButton
//         aria-label="more"
//         id="long-button"
//         aria-controls="long-menu"
//         aria-expanded={open ? "true" : undefined}
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         <MoreVertIcon />
//       </IconButton>

//       <Menu
//         id="long-menu"
//         MenuListProps={{
//           "aria-labelledby": "long-button",
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       >
//         <List>
//           <Router>
//             <ListItem button component={Link} to="#about-me">
//               <ListItemText primary={"About Me"} />
//             </ListItem>

//             <Link to="#portfolio">
//               <ListItem button onClick={() => {}}>
//                 <ListItemText primary={"Portfolio"} />
//               </ListItem>
//             </Link>

//             <ListItem button onClick={() => {}}>
//               <ListItemText primary={"Contact"} />
//             </ListItem>

//             <ListItem button onClick={() => {}}>
//               <ListItemText primary={"Resume"} />
//             </ListItem>
//           </Router>
//         </List>

//         {/* {options.map((option) => (
//           <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
//             {option}
//           </MenuItem>
//         ))} */}
//       </Menu>
//     </div>
//   );
// }
