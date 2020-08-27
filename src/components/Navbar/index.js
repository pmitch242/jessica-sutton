import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Hidden, IconButton, Drawer, ListItem, List, ListItemText, makeStyles, Divider, Box, Container } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

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
    container: {
        display: 'flex',
        justifyContent: 'inherit',
        alignItems: 'center',
        paddingLeft: '13px',
        paddingRight: '30px',
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
        marginRight: '13px',
    },
    toggleButton: {
        color: '#d89736',
        fontSize: '2.25rem',
    },
    list: {
        marginTop: '60px',
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
        padding: '0 13px',
    },
});

const Navbar = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open)
    }


    return (

        <Box fontFamily='fontFamily' className={`navbar ${classes.root}`} >
            <Container className={classes.container}>
                <Link to='/' className='navbar-logo-link'><Logo /></Link>

                <Hidden xsDown>
                    <div className='navlinks'>
                        <NavLink exact to='/'>Home</NavLink>
                        <NavLink exact to='/about'>About</NavLink>
                        <NavLink exact to='/services'>Services</NavLink>
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
            </Container>

            <Drawer
                open={open}
                onClose={toggleDrawer}
            >
                <div className={classes.menuContainer}>
                    <div className={`navbar ${classes.menuHeader}`}>
                        <Link onClick={toggleDrawer} to='/' style={{ textDecoration: 'none', color: 'inherit', marginLeft: '13px' }}><Logo /></Link>
                        <IconButton onClick={toggleDrawer} className={classes.closeButton}>
                            <CloseIcon className={classes.toggleButton} />
                        </IconButton>
                    </div>
                    <Divider />
                    <List className={classes.list}>
                        <ListItem button component={NavLink} to='/' onClick={toggleDrawer} className={classes.drawerNav}>
                            <ListItemText primary='Home' />
                        </ListItem>
                        <ListItem button component={NavLink} to='/about' onClick={toggleDrawer}>
                            <ListItemText primary='About' />
                        </ListItem>
                        <ListItem button component={NavLink} to='/services' onClick={toggleDrawer}>
                            <ListItemText primary='Services' />
                        </ListItem>
                            <List component="div" disablePadding>
                                <ListItem
                                    button
                                    className={classes.nested}
                                    component={NavLink}
                                    to='/services'
                                    onClick={toggleDrawer}
                                >
                                    <ListItemText primary='Direct Representation' />
                                </ListItem>
                                <ListItem
                                    button
                                    className={classes.nested}
                                    component={NavLink}
                                    to='/services'
                                    onClick={toggleDrawer}
                                >
                                    <ListItemText primary='Consulting' />
                                </ListItem>
                                <ListItem
                                    button
                                    className={classes.nested}
                                    component={NavLink}
                                    to='/services'
                                    onClick={toggleDrawer}
                                >
                                    <ListItemText primary='Training' />
                                </ListItem>
                            </List>
                        {/* <ListItem button component={NavLink} to='/news' onClick={toggleDrawer}>
                            <ListItemText primary='News' />
                        </ListItem>
                        <ListItem button component={NavLink} to='/opportunities' onClick={toggleDrawer}>
                            <ListItemText primary='Join The Team' />
                        </ListItem> */}
                        <ListItem button component={NavLink} to='/contact' onClick={toggleDrawer}>
                            <ListItemText primary='Contact' />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </Box>

    )
}

export default Navbar;