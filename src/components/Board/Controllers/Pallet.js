import React from 'react';
import '../Board.css';

const pallet = (props) => {

    let colors = props.colors.map((color, index) => {
        return <div 
                    key={props.title + index}
                    className="pallet__color"
                    style={{backgroundColor: color}}
                    onClick={() => props.colorClicked(color)}
                />
    });

    return(
        <div>
            <h3>{props.title}</h3>
            <div className={"pallet__container"}>
                {colors}
            </div>
        </div>
    );
};

export default pallet;