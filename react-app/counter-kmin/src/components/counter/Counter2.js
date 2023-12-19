import React from 'react';
import "./Counter.scss";
import Content from './Content.js';

const Counter2 = () => {
    let name = 'Quý';

    const hello = (str) => {
        alert(str + ' ' + name)
    }

    return (
        <div class="counter">
            <h2 style={{ color: "var(--red)", fontSize: "1.2em" }}>Bộ đếm Kmin</h2>
            <Content/>

            <div class="counter__actions">
                <button class="btn btn--yellow" onClick={() => { hello('Xin chào') }}>Xin chào</button>
                <button class="btn btn--blue" onClick={() => { alert('Tạm biệt') }}>Tạm biệt</button>
            </div>
        </div>
    )
};

export default Counter2