import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Typography, Hidden, IconButton, Drawer, ListItem, List, ListItemText, makeStyles, Divider, Collapse } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { ExpandMore, ChevronRight } from '@material-ui/icons'

import './nav.css';

// styles
const useStyles = makeStyles({
    menuContainer: {
        width: '100vw',
        height: '100%',
        background: '#001639',
        color: '#e9e9e9'
    },
    menuHeader: {
        backgroundColor: 'inherit',
        color: '#e9e9e9',
    },
    toggleButton: {
        color: '#d89736'
    },
    nested: {
        paddingLeft: '40px',
    },
    closeButton: {
        paddingLeft: '0',
        paddingRight: '0',
    }
});

const Navbar = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [openServices, setopenServices] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open)
    }

    const toggleCollapse = () => {
        setopenServices(!openServices)
    }

    return (

        <div className='navbar' >
            <div className='logo'>
                <Typography varient='h2'>JessicaSutton</Typography>
            </div>

            <Hidden xsDown>
                <div className='navlinks'>
                    <NavLink to='/'>About</NavLink>
                    <NavLink to='/'>Services</NavLink>
                    <NavLink to='/'>News</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
                <div className='nav-contact'>
                    <span>Email: jess.el.sutton@gmail.com</span>
                    <span>Phone: 208-503-9381</span>
                </div>
            </Hidden>

            <Hidden smUp>
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon className={classes.toggleButton}/>
                </IconButton>
            </Hidden>

            <Drawer
                open={open}
                onClose={toggleDrawer}
            >
                <div className={classes.menuContainer}>
                    <div className={`navbar ${classes.menuHeader}`}>
                        <div className='logo'>
                            <Typography varient='h2'>JessicaSutton</Typography>
                        </div>
                        <IconButton onClick={toggleDrawer} className={classes.closeButton}>
                            <CloseIcon className={classes.toggleButton}/>
                        </IconButton>
                    </div>
                    <Divider />
                    <List >
                        <ListItem button component='a'>
                            <ListItemText primary='Home' />
                        </ListItem>
                        <ListItem button component='a'>
                            <ListItemText primary='About' />
                        </ListItem>
                        <ListItem button onClick={toggleCollapse}>
                            <ListItemText primary="Services" />
                                {openServices ? <ExpandMore /> : <ChevronRight />}
                        </ListItem>
                        <Collapse in={openServices} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Direct Representation" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Consulting" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Training" />
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button component='a'>
                            <ListItemText primary='News' />
                        </ListItem>
                        <ListItem button component='a'>
                            <ListItemText primary='Join The Team' />
                        </ListItem>
                        <ListItem button component='a'>
                            <ListItemText primary='Contact' />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>

    )
}

export default Navbar;