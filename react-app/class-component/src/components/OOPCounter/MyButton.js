import React from "react";

class MyButton extends React.Component {
    render() {
        let className = "";
        switch (this.props.color) {
            case "yellow":
                className = "btn btn--yellow";
                break;
            case "blue":
                className = "btn btn--blue";
                break;
            case "red":
                className = "btn btn--red";
                break;
            default:
                className = "btn";
        }

        let onClick = this.props.onClick;
        let text = this.props.children;
        return (
            <button className={className} onClick={onClick}>{text}</button>
        );
    }
}

export default MyButton;