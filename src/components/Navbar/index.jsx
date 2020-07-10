import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Button, Typography, Hidden } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

const TopNav = () => {
    const theme = useTheme();
    console.log(theme);

    const useStyles = makeStyles((theme) => ({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        link: {
            textDecoration: 'none',
            color: 'inherit'
        },
        contactInfo: {
            margin: '10px 0px 10px 15px',
            paddingLeft: '20px',
            borderLeft: '2px solid #ffffff'
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <AppBar color='transparent' position="static">
                    <Toolbar>
                        <Typography variant="h5" className={classes.title}>
                            <NavLink to='/' className={classes.link}>
                                JenniferSutton
                            </NavLink>
                        </Typography>

                        <Hidden smDown>
                            <Button><NavLink to='/about' className={classes.link}>About</NavLink></Button>
                            <Button><NavLink to='/services' className={classes.link}>Services</NavLink></Button>
                            <Button><NavLink to='/contact' className={classes.link}>Contact</NavLink></Button>

                            <div className={`nav-contact-info flex ${classes.contactInfo}`}>
                            <span>Email: jess.el.sutton@gmail.com</span>
                            <span>Phone: 208-503-9381</span>
                        </div>
                        </Hidden>

                        <Hidden mdUp>
                            <IconButton
                                // edge='start'
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}

export default TopNav;
