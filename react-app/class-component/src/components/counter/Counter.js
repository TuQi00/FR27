import React from 'react';
import "./Counter.scss";

class Counter extends React.Component {
    constructor() {
        super();
        this.name = 'counter';
        this.hello = this.hello.bind(this);
    }

    hello(str) {
        alert(str + ' ' + this.name);
    }

    run() {

    }
    render() {
        return (
            <div class="counter">
                <h2 style={{ color: "var(--red)", fontSize: "1.2em" }}>Bộ đếm Kmin</h2>
                <div style={{ fontWeight: 'bold' }}>1</div>

                <div class="counter__actions">
                    <button class="btn btn--red" onClick={this.run}>Đếm</button>
                    <button class="btn btn--yellow" onClick={() => { this.hello('Xin chào') }}>Xin chào</button>
                    <button class="btn btn--blue" onClick={() => { alert('Tạm biệt') }}>Tạm biệt</button>
                </div>
            </div>
        )
    }
}

export default Counter