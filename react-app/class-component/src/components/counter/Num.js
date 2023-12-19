import React, { useState } from 'react';
import "./Counter.scss";

export default function Num(props) {
    const [value, setValue] = useState(props.start);

    const handleChange = (k) => {
        console.log(typeof value);
        console.log(typeof k);
        setValue(parseInt(value) + k);
    };
    return (
        <div style={{ fontWeight: 'bold' }}>
            <span class="btn-change" onClick={() => handleChange(-1)}>&lt;</span>
            <span>{value}</span>
            <span class="btn-change" onClick={() => handleChange(1)}>&gt;</span>
        </div>
    )

}