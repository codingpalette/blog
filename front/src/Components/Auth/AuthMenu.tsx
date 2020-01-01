import React , { useState  } from 'react';
import { Link } from 'react-router-dom';

// 마테리얼
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

// 리덕스
import { useSelector  } from 'react-redux';
import { RootState } from '../../modules';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        linkColor : {
            textDecoration : 'none',
            color :"inherit",
            width:'100%',
        }
    }),
);


const AuthMenu = () => {
    // 리덕스
    const { logind } = useSelector((state: RootState) => state.auth);

    // 마테리얼
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return(
        <>
            <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    {logind
                        ? (
                            <MenuItem onClick={handleClose}>
                                <span>로그아웃</span>
                            </MenuItem>
                        )
                        : (
                            <div>
                                <MenuItem onClick={handleClose}>
                                    <Link to="/login" className={classes.linkColor}>로그인</Link>  
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to="/admin" className={classes.linkColor}>관리자</Link>  
                                </MenuItem>
                            </div>
                        )
                    }
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
            </div>
        </>
    )
};

export default AuthMenu;