import React, {Component, Fragment} from 'react';

import './BoardBuilder.css';

import Board from '../../components/Board/Board';
import Colors from '../../components/Board/Controllers/Colors';
import Frames from '../../components/Board/Controllers/Frames';

const WIDTH = 15;
const HEIGHT = 15;
const SIZE = WIDTH  * HEIGHT; 
const DEFAULT_COLOR = "#000000";

class BoardBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boardWidth: WIDTH,
            boardHeight: HEIGHT,
            animation: [],
            currentFrame: [],
            frame: 0,
            currentColor: DEFAULT_COLOR,
            history: [],
            sketchColor: "#FFFFFF"
        }

        let frame = new Array(SIZE);
        frame.fill(DEFAULT_COLOR);
        this.state.currentFrame = frame;
    }

    palletColorHandler = (color) => {
        this.setState({currentColor: color})
    }

    pixelColorHandler = (index) => {
        let tempFrame = [...this.state.currentFrame];
        tempFrame[index] = this.state.currentColor;
        this.setState({currentFrame: tempFrame});
    }

    sketchChangeHandler = (color) => {
        this.setState({ sketchColor: color.hex });
    };

    addFrameHandler = (type) => {
        let newFrame = new Array(SIZE);

        if(type === "new")
            newFrame.fill(DEFAULT_COLOR);
        else if(type === "copy")
            newFrame = this.state.currentFrame;
    
        const frameNum = this.state.frame + 1;
        this.state.animation.splice(frameNum, 0, newFrame);

        this.setState({
           frame: frameNum,
           currentFrame: 
        });
    }

    sketchSelectClicked = () => {
        this.setState({ currentColor: this.state.sketchColor })
    }

    arrowHandler = (direction) => {
        console.log(direction);
    }

    render(){
        return(
            <Fragment>
                <div className={"boardBuilder__container"}>
                    <Colors 
                        currentColor={this.state.currentColor}
                        sketchColor={this.state.sketchColor}
                        sketchChangeHandler={this.sketchChangeHandler}
                        sketchSelectClicked={this.sketchSelectClicked}/>
                    <Board 
                        width={this.state.boardWidth}
                        height={this.state.boardHeight}
                        frame={this.state.currentFrame}
                        pixelClicked={this.pixelColorHandler} />
                    <Frames 
                        addFrameHandler={this.addFrameHandler}/>
                </div>
            </Fragment>
        );
    };
}

export default BoardBuilder;