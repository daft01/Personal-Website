import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(() => ({
    navbar_title:{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        flexGrow: 1,
        textAlign: 'left'
    },
    navbar_options: {
        flexGrow: 2,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    navbar_option: {
        fontSize: '1.3rem',
        marginRight: '1.3rem',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    navbar_button: {
        backgroundColor: 'chartreuse'
    }
}));

export default function MenuAppBar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleLogout = () => {
        handleClose();
        setAuth(false);
    };

    const handleSignin = () => {
        setAuth(true);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="h6" className={classes.navbar_title}>
                        LED Matrix
                    </Typography>
                    {auth ? (
                        <div className={classes.navbar_options}>
                            <span className={classes.navbar_option}>Projects</span>
                            <span className={classes.navbar_option}>Request</span>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'bottom',
                                }}
                                keepMounted
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'bottom',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleLogout}>Log out</MenuItem>
                            </Menu>
                        </div>)
                        : <Button onClick={handleSignin} className={classes.navbar_button}>Log in</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}
