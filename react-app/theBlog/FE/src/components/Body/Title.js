import React, { useContext } from 'react';
import './Title.css';
import { contextApp } from '../../App';

const Title = ({ title }) => {
    const dataContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;
    return (
        <div className={`container_title ${isCheckTheme === true ? 'chageDark' : 'chageBright'}`}>
            <h2>
                {title}
            </h2>
        </div>
    );
};

export default Title;
