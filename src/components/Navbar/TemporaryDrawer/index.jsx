import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { InfoOutlined, ChatBubbleOutline, AccountBalanceOutlined } from '@material-ui/icons';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemIcon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '65vw',
    height: '100%',
    backgroundColor: theme.palette.custom.gray
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const menuItems = [
  {
    icon: <InfoOutlined/>,
    text: 'About'
  },
  {
    icon: <AccountBalanceOutlined/>,
    text: 'Services'
  },
  {
    icon: <ChatBubbleOutline/>,
    text: 'Contact'
  },
]

export default function TemporaryDrawer({ open, close }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Drawer
        anchor='right'
        open={open}
        onClose={close}
      >
        <div className={classes.root}>
          <List>
              {menuItems.map((item) => (
                <ListItem key='item.text' button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
          </List>
          </div>
      </Drawer>
    </React.Fragment>
  );
}