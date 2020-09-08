import React from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Frames(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return(
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                startIcon={<AddIcon/>}
                style={{ backgroundColor: "lime" }} > Add </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => props.addFrameHandler("new")}>New</MenuItem>
                <MenuItem onClick={() => props.addFrameHandler("copy")}>Copy</MenuItem>
            </Menu>
            <ArrowUpwardIcon  onClick={() => this.arrowHandler("back")}/>
            <ArrowDownwardIcon  onClick={() => this.arrowHandler("forward")}/>
        </div>
    )
};

;