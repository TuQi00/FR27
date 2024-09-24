import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { contextApp } from '../../App';
import { TColorTheme } from '../../assets/Color';
// import { TColorTheme } from '../../assets/ts/Color';

const Header = () => {
    const dataContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;
    const [isCheckActives, setIsCheckActive] = useState('Blog');
    const [isCheckChageTheme, setIsCheckChageTheme] = useState(false);
    const [widthWindown, setWidthWindown] = useState(window.innerWidth);
    const [isDisplayBars, setIsDisplayBars] = useState(() => {
        const windowWidth = window.innerWidth;
        return windowWidth <= 1024;
    });

    const handleOnclickActiveNavbar = (name) => {
        switch (name) {
            case 'Blog':
            case 'Project':
            case 'About':
            case 'Newsletter':
                setIsCheckActive(name);
                if (widthWindown < 1200) {
                    setIsDisplayBars(true);
                } else {
                    setIsDisplayBars(false);
                }
                break;
            default:
                if (widthWindown < 1200) {
                    setIsDisplayBars(true);
                } else {
                    setIsDisplayBars(false);
                }
                setIsCheckActive('Blog');
        }
    };

    const handleOnclickChangeTheme = () => {
        setIsCheckChageTheme(!isCheckChageTheme);
        dataContextApp.handleOnclickchangeIsCheckTheme();
    };

    const HandleDisplayMobile = () => {
        setIsDisplayBars(!isDisplayBars);
    };

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setWidthWindown(windowWidth);
            setIsDisplayBars(windowWidth <= 1024 ? true : false);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className={`header ${isCheckTheme ? 'chageColorDark' : 'chageColorbright'}`}>
            <h1 className={`header_logo ${isCheckTheme ? 'chageColorDark' : 'chageColorbright'}`}>
                Quy
            </h1>
            {isDisplayBars === false ? (
                <div className='header_navbar' style={{ backgroundColor: `${isCheckTheme ? TColorTheme.$colorThemeDarkBackGreen : TColorTheme.$colorThemeWhite}` }}>
                    <div className='header_navbar_list'>
                        <Link to='/' className={`header_navbar_list_item ${isCheckActives === 'Blog' ? 'active' : 'hover'} ${isCheckTheme ? 'chageColorDark' : 'chageColorbright'}`} onClick={() => handleOnclickActiveNavbar('Blog')}>Blog</Link>
                        <Link to='/Project' className={`header_navbar_list_item ${isCheckActives === 'Project' ? 'active' : 'hover'} ${isCheckTheme ? 'chageColorDark' : 'chageColorbright'}`} onClick={() => handleOnclickActiveNavbar('Project')}>Project</Link>
                        <Link to='/About' className={`header_navbar_list_item ${isCheckActives === 'About' ? 'active' : 'hover'} ${isCheckTheme ? 'chageColorDark' : 'chageColorbright'}`} onClick={() => handleOnclickActiveNavbar('About')}>About</Link>
                        <Link to='/Newsletter' className={`header_navbar_list_item ${isCheckActives === 'Newsletter' ? 'active' : 'hover'} ${isCheckTheme ? 'chageColorDark' : 'chageColorbright'}`} onClick={() => handleOnclickActiveNavbar('Newsletter')}>Newsletter</Link>
                        <li className='header_navbar_list_item'>
                            <div className={`header_navbar_list_item_containerTheme ${isCheckTheme ? 'chageBgColorbright' : 'chageBgColorDark'}`}>
                                {isCheckChageTheme === true ? <i className={`fa-regular fa-sun header_navbar_list_item_containerTheme_iconSun ${isCheckTheme ? 'chageColorDark' : 'chageColorbright'}`} onClick={handleOnclickChangeTheme}></i> : <div className={`header_navbar_list_item_containerTheme_iconShapeCircle ${isCheckTheme ? 'chageBgColorbright' : 'chageBgColorDark'}`}></div>}
                                {isCheckChageTheme === false ? <i className={`fa-regular fa-moon header_navbar_list_item_containerTheme_iconMoon ${isCheckTheme ? 'chageColorDark' : 'chageColorbright'}`} onClick={handleOnclickChangeTheme}></i> : <div className={`header_navbar_list_item_containerTheme_iconShapeCircle ${isCheckTheme ? 'chageBgColorbright' : 'chageBgColorDark'}`}></div>}
                            </div>
                        </li>
                        <li className='header_navbar_list_item header_navbar_list_item_iconClose' onClick={HandleDisplayMobile} style={{ color: `${isCheckTheme ? TColorTheme.$colorThemeWhite : TColorTheme.$colorThemeDarkBackGreen}` }}>
                            <i className="fa-solid fa-xmark"></i>
                        </li>
                    </div>
                </div>
            ) : null}
            <button className={`header_btnMobile ${isCheckTheme ? 'chageColorDark' : 'chageColorbright'}`} onClick={HandleDisplayMobile}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </header>
    );
};

export default Header;
