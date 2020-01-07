import React from 'react';
import SideMenu from "./SideMenu";
import Filter from "./filter";
import App from "../App";
import Notes from "./notes";

class Header extends React.Component{

    filter = (titletext) => {
        App.setState({notes: [...App.state.notes.filter(notes => notes.title.toLowerCase().indexOf(titletext.toLowerCase()) !== -1 )]});
        alert(titletext);
    };

    render(){
        return (
            <div className="App">

            </div>
        );
    }
}

export default Header;