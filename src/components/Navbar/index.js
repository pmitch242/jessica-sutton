import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Hidden, IconButton, Drawer, ListItem, List, ListItemText, makeStyles, Divider, Collapse, Box } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { ExpandMore, ChevronRight } from '@material-ui/icons'

import Logo from '../Logo';

import './nav.css';

// styles
const useStyles = makeStyles({
    root: {},
    menuContainer: {
        width: '100vw',
        height: '100%',
        color: '#e9e9e9',
        backgroundColor: '#001639',
    },
    menuHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'inherit',
        color: '#e9e9e9',
        padding: '10px 0',

    },
    menuButton: {
        padding: '0px',
        position: 'fixed',
        right: '0',
        marginRight: '15px',
    },
    toggleButton: {
        color: '#d89736',
        fontSize: '2.5rem',
    },
    contactIcon: {
        marginLeft: '15px',
        color: '#d8973c',
        fontSize: '20px'
    },
    nested: {
        paddingLeft: '30px',
    },
    closeButton: {
        padding: '0 7px',
    },
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

        <Box fontFamily='fontFamily' className={`navbar ${classes.root}`} >
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><Logo /></Link>

            <Hidden xsDown>
                <div className='navlinks'>
                    <NavLink exact to='/'>Home</NavLink>
                    <NavLink exact to='/about'>About</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink exact to='/news'>News</NavLink>
                    <NavLink exact to='/contact'>Contact</NavLink>
                </div>
                <div className='nav-contact'>
                    <span>jess.el.sutton@gmail.com<EmailIcon className={classes.contactIcon} /></span>
                    <span>208-503-9381<PhoneIcon className={classes.contactIcon} /></span>
                </div>
            </Hidden>

            <Hidden smUp>
                <IconButton onClick={toggleDrawer} className={classes.menuButton}>
                    <MenuIcon className={classes.toggleButton} />
                </IconButton>
            </Hidden>

            <Drawer
                open={open}
                onClose={toggleDrawer}
            >
                <div className={classes.menuContainer}>
                    <div className={`navbar ${classes.menuHeader}`}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit', marginLeft: '15px' }}><Logo /></Link>
                        <IconButton onClick={toggleDrawer} className={classes.closeButton}>
                            <CloseIcon className={classes.toggleButton} />
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
        </Box>

    )
}

export default Navbar;