import React, { useReducer } from "react";
import clsx from "clsx";
import Icon from "./Icon";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DrawerMenu from "./DrawerMenu";
import {
  faVirus,
  faFlag,
  faBusinessTime,
  faMicrochip,
  faTv,
  faFlask,
  faDumbbell,
  faBiking,
} from "@fortawesome/free-solid-svg-icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
const initEndpoint = {
  type:"",
  params:""
};
// business entertainment general health science sports technology
function reducer(state, action) {
  switch (action) {
    case "Top Headines":
      return { type:"q",params:""};
    case "COVID19":
      return { type:"q",params:"coronavirus"};
    case "India":
      return { type:"q",params:"India"};
    case "business":
      return { type:"category",params:"business"};
    case "entertainment":
      return { type:"category",params:"entertainment"};
    case "health":
      return { type:"category",params:"health"};
    case "science":
      return { type:"category",params:"science"};
    case "sports":
      return { type:"category",params:"sports"};
    case "technology":
      return { type:"category",params:"technology"};
    default:
      return "";
  }
}
export const endpointContext = React.createContext("");
export default function DrawerBar(props) {
  const [endpoint, dispatchEndpoint] = useReducer(reducer, initEndpoint);

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "white", color: "black" }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            style={{ display: "contents", fontWeight: "600" }}
          >
            Top News
            <Icon />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <DrawerMenu dispatch={dispatchEndpoint} text="Top Headines">
            <FontAwesomeIcon icon={faNewspaper} />
          </DrawerMenu>
          <DrawerMenu dispatch={dispatchEndpoint} text="COVID19">
            <FontAwesomeIcon icon={faVirus} />
          </DrawerMenu>
          <DrawerMenu dispatch={dispatchEndpoint} text="India">
            <FontAwesomeIcon icon={faFlag} />
          </DrawerMenu>
        </List>
        <Divider />

        <List>
          <DrawerMenu dispatch={dispatchEndpoint} text="business">
            <FontAwesomeIcon icon={faBusinessTime} />
          </DrawerMenu>
          <DrawerMenu dispatch={dispatchEndpoint} text="entertainment">
            <FontAwesomeIcon icon={faTv} />
          </DrawerMenu>
          <DrawerMenu dispatch={dispatchEndpoint} text="health">
            <FontAwesomeIcon icon={faDumbbell} />
          </DrawerMenu>
          <DrawerMenu dispatch={dispatchEndpoint} text="science">
            <FontAwesomeIcon icon={faFlask} />
          </DrawerMenu>
          <DrawerMenu dispatch={dispatchEndpoint} text="sports">
            <FontAwesomeIcon icon={faBiking} />
          </DrawerMenu>
          <DrawerMenu dispatch={dispatchEndpoint} text="technology">
            <FontAwesomeIcon icon={faMicrochip} />
          </DrawerMenu>
        </List>
      </Drawer>
      <endpointContext.Provider value={endpoint}>
        {props.children}
      </endpointContext.Provider>
    </div>
  );
}
