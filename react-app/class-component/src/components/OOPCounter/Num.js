import React from "react";
import "./Num.scss"
import MyButton from "./MyButton";

class Num extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: Number(this.props.start),
            isPlaying: false,
        };

        this.timerID = -1;

        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.change = this.change.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentDidMount() {
        if (this.props.autoPlay) {
            this.timerID = setInterval(
                () => this.up(),
                1000
            );
            this.setState({
                isPlaying: true
            });
        }
        else {
            this.setState({
                isPlaying: false
            });
        }
    }
    

    componentDidUpdate(prevProps) {  
        if (prevProps.start !== this.props.start) {
            this.setState({
                value: Number(this.props.start),
            });
        }

        if (this.state.value === this.props.end) {
            console.log(this.state.value, "this.state.value",this.props.end,'this.props.end' );
            clearInterval(this.timerID);
        } 
        
    }

    componentWillUnmount() {
        console.log(3, 'Unmount');
        clearInterval(this.timerID)
    }

    up() {
        this.setState((state) => ({
            value: state.value + 1
        }));
    }

    down() {
        this.setState((state) => ({
            value: state.value - 1
        }));
    }

    change(k) {
        this.setState((state) => ({
            value: state.value + k
        }));
    }

    play() {
        this.timerID = setInterval(
            () => this.up(),
            1000
        );
        this.setState((state) => ({
            isPlaying: !state.isPlaying
        }));
    }

    pause() {
        clearInterval(this.timerID);
        this.setState((state) => ({
            isPlaying: !state.isPlaying
        }));
    }

    stop() {
        clearInterval(this.timerID);
        this.setState((state) => (
            {
                value: Number(this.props.start),
                isPlaying: false,
            }));

    }

    render() {
        return (
            <>
                <div style={{ fontWeight: "bold" }}>
                    <span className="btn-change" onClick={() => this.change(-2)}>&lt;</span>
                    <span>{this.state.value}</span>
                    <span className="btn-change" onClick={this.up}>&gt;</span>
                </div>
                {
                    this.state.isPlaying
                        ? <MyButton color="yellow" onClick={this.pause}>✘</MyButton>
                        : <MyButton color="blue" onClick={this.play}>►</MyButton>
                }
                <MyButton color="red" onClick={this.stop}>■</MyButton>

            </>

        );
    }
}

export default Num;