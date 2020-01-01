import React , {useState} from 'react';
import { Link , withRouter } from 'react-router-dom';

import AuthMenu from '../Auth/AuthMenu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PostAddIcon from '@material-ui/icons/PostAdd';





const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        linkColor : {
            textDecoration : 'none',
            color :"inherit",
            width:'100%',
        }
    }),
);

const Header = () => {
    const classes = useStyles();
    const [auth] = useState(true);
    
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    

    type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
    const toggleDrawer = (side: DrawerSide, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
    
        setState({ ...state, [side]: open });
    };

    const sideList = (side: DrawerSide) => (
        <div
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
            className={classes.list}
        >
            <List>
                <Link to="/" className={classes.linkColor}>
                    <ListItem button>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link to="/blog" className={classes.linkColor}>
                    <ListItem button>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Blog" />
                    </ListItem>
                </Link>
                <Link to="/sub" className={classes.linkColor}>
                    <ListItem button>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Sub" />
                    </ListItem>
                </Link>
                <Link to="/todo" className={classes.linkColor}>
                    <ListItem button>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Todo" />
                    </ListItem>
                </Link>
                {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))} */}
            </List>
            <Divider />
            <List>
                <Link to="/post_create" className={classes.linkColor}>
                    <ListItem button>
                        <ListItemIcon><PostAddIcon /></ListItemIcon>
                        <ListItemText primary="새 포스트 작성" />
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    return(
        <>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <IconButton 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu"
                        onClick={toggleDrawer('left', true)}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                        {sideList('left')}
                    </Drawer>
                    <Typography variant="h6" className={classes.title}>
                        Photos
                    </Typography>
                    {auth && (

                        <AuthMenu></AuthMenu>
                        
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
};


export default withRouter(Header);