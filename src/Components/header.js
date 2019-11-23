import React from 'react';
import SideMenu from "./SideMenu";

class Header extends React.Component{

    render(){
        return (
            <div className="App">
                <header>
                    <div className="gb_uc" aria-expanded="true" aria-label="Главное меню" role="checkbox" tabIndex="0">
                        <input type="checkbox" id="nav-toggle" hidden/>
                        <SideMenu/>
                        <label htmlFor="nav-toggle" onClick>
                            <svg
                                className="SideMenuSvg"
                                viewBox="0 0 24 24"
                                type="checkbox">
                                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                            </svg>
                        </label>
                    </div>
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"/>
                    <a><span className="keep">Keep</span></a>
                    <input className="search" aria-label="Поиск" autoComplete="oаа" placeholder="Поиск" type="text" aria-hidden="true"/>
                </header>
            </div>

        );
    }
}

export default Header;