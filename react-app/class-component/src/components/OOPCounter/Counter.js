import React from "react";
import './Counter.scss';
import MyButton from "./MyButton";
import Num from "./Num";
import SettingsForm from "./SettingForm";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: this.props.start,
            end: this.props.end,
            isPlaying: true,
        };
        
        console.log(this.state, this.state.isPlaying, "constructor" );
        this.handleReceivedData = this.handleReceivedData.bind(this);
        this.handleIsPlaying = this.handleIsPlaying.bind(this);

    }
    hello() {
        alert("Xin chào.");
    }

    handleReceivedData(start,end){
        this.setState({
            start,
            end
        });
    }
    handleIsPlaying(isPlaying) {
        this.setState({isPlaying });
    }

    render() {
        return (
            <div className="counter">
                <h2 style={{ color: "var(--red)", fontSize: "1.2em" }}>{this.props.heading}</h2>
                <SettingsForm receivedData = {this.handleReceivedData} isPlaying={this.state.isPlaying}/>           
                <Num start={this.state.start} end={this.state.end} handleIsPlaying = {this.handleIsPlaying} autoPlay/>    
                <div className="counter__actions">
                    <button className="btn btn--yellow" onClick={this.hello}>Xin chào</button>
                    <button className="btn btn--blue" onClick={() => console.log("Tạm biệt")}>Tạm biệt</button>

                </div>
            </div>
        );
    }
}

export default Counter;