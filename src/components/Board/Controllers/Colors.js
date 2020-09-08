import React, {Component, Fragment} from 'react';

import { SketchPicker } from 'react-color';
import Button from '@material-ui/core/Button';

const BASICS = ['#FF0000', '#FF8000', '#FFFF00', '#00FF00', '#00FFFF', '#7F00FF', '#FFFFFF', "#000000"];
const colors = (props) => {

    return(
        <div className={"colors__colors"}>
                <span>Current Color</span>
                <div 
                    className="colors__color" 
                    style={{backgroundColor: props.currentColor}}/>
                <span>Sketch Color</span>
                <div className="colors__sketch">
                    <div 
                        className="colors__color" 
                        style={{backgroundColor: props.sketchColor}}/>
                    <Button 
                        className={"colors__select_button"}
                        onClick={props.sketchSelectClicked}>Select</Button>
                </div>
            <SketchPicker
                color={props.sketchColor}
                disableAlpha={true}
                presetColors={BASICS}
                onChange={props.sketchChangeHandler}/>
        </div>
    )
};

export default colors;