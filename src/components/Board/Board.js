import React from 'react';
import './Board.css'

const Board = (props) => {

    let pixels = [];

    for(let h=0; h<props.height; h++){
        let row = [];

        for(let w=0; w<props.width; w++){
            let num;

            if(h%2 === 0)
                num = h * props.width + w;
            else 
                num = h * props.width - w + props.width - 1;

            row.push(
                <div
                    key={"pixel" + num}
                    style={{backgroundColor: props.frame[num]}}
                    className={"board__pixel"}
                    onClick={() => props.pixelClicked(num)}
                />
            )
        }
        
        pixels.push(<div 
                className="board__row" 
                key={"rowBoard" + h}>{row}</div>) 
    }

    return(
            <div>
                {pixels}
            </div>
        );
}

export default Board;