import React from 'react';
import "./Counter.scss";
import Num from './Num.js';
import MyButton from './MyButton.js';

const Counter2 = (props) => {
    let name = 'Quý';

    const hello = (str) => {
        alert(str + ' ' + name)
    }

    return (
        <div class="counter">
            <h2 style={{ color: "var(--red)", fontSize: "1.2em" }}>{props.heading}</h2>
            <Num start={props.startCount}/>
            {/* <MyButton color="yellow" onClick={action}>Pause</MyButton> */}
            {/* <MyButton color="blue" onClick={action}>Play</MyButton> */}
            <MyButton color="yellow" onClick={() => alert("Pause")}>Pause</MyButton>

            <div class="counter__actions">
                <button class="btn btn--yellow" onClick={() => { hello('Xin chào') }}>Xin chào</button>
                <button class="btn btn--blue" onClick={() => { alert('Tạm biệt') }}>Tạm biệt</button>
            </div>
        </div>
    )
};

export default Counter2