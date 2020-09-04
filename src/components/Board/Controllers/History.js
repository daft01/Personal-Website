import React from 'react';

import Pallet from "./Pallet";

const history = (props) => {

    let colorIndex = props.colors.findIndex(color => color === props.currentColor);
    
    if(colorIndex === -1)
        colorIndex = props.colors.length - 1;

    for(let i=colorIndex; i>0; i--){
        props.colors[i] = props.colors[i-1];
    }

    props.colors[0] = props.currentColor;

    return <Pallet 
                title="History"
                colors={props.colors} 
                colorClicked={props.colorClicked}/>
};

export default history;