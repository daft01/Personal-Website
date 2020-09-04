import React, {Component, Fragment} from 'react';
import { ChromePicker } from 'react-color';

import './BoardBuilder.css';

import Board from '../../components/Board/Board';
import Pallet from '../../components/Board/Controllers/Pallet';
import History from '../../components/Board/Controllers/History';
import Frames from '../../components/Board/Controllers/Frames';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// white, black, red, green, blue, yellow, orange
const BASICS = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ffa500"];
const WIDTH = 15;
const HEIGHT = 15;

class BoardBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boardWidth: WIDTH,
            boardHeight: HEIGHT,
            animation: [],
            currentFrame: [],
            frame: 0,
            currentColor: "#000000",
            history: new Array(Math.floor(HEIGHT/2)),
            sketchColor: "#FFFFFF"
        }

        let frame = new Array(this.state.boardWidth * this.state.boardHeight);
        frame.fill("#000000");
        this.state.animation.push(frame);
        this.state.currentFrame = frame;

        this.state.history.fill("#ffffff");
    }

    palletColorHandler = (color) => {
        this.setState({currentColor: color})
        console.log(color);
    }

    pixelColorHandler = (index) => {
        let tempFrame = [...this.state.currentFrame];
        tempFrame[index] = this.state.currentColor;
        this.setState({currentFrame: tempFrame});
    }

    

    arrowHandler = (direction) => {
        console.log(direction);
    }

    render(){
        return(
            <Fragment>
                <div className={"boardBuilder__container"}>
                    <div>
                        <Pallet 
                            title="Current Color"
                            colors={[this.state.currentColor]} />
                        <History 
                            currentColor={this.state.currentColor}
                            colors={this.state.history}
                            colorClicked={this.palletColorHandler}/>
                    </div>
                    <Board 
                        width={this.state.boardWidth}
                        height={this.state.boardHeight}
                        frame={this.state.currentFrame}
                        pixelClicked={this.pixelColorHandler} />
                    <div>
                        <ChromePicker />
                        <Pallet 
                            title="Basic Colors" 
                            colors={BASICS} 
                            colorClicked={this.palletColorHandler} />
                    </div>
                </div>
                <div>
                    <ArrowBackIcon onClick={() => this.arrowHandler("back")}/>
                    <Frames />
                    <ArrowForwardIcon onClick={() => this.arrowHandler("forward")}/>
                </div>
            </Fragment>
        );
    };
}

export default BoardBuilder;