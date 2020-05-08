import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
function DrawerMenu(props) {
    return (
        <ListItem onClick={()=> props.dispatch(props.text)} button >
            <ListItemIcon style={{minWidth:"30px"}}>{props.children}</ListItemIcon>
            <ListItemText primary={props.text}></ListItemText>
        </ListItem>
    );
}
export default DrawerMenu;