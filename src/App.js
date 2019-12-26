import React from 'react';
import './App.css';
import Header from "./Components/header";
import Addnote from "./Components/addnote";

class App extends React.Component{
    state = {
        notes:[
            {
                id: 1,
                title: 'Вынести мусор',
                text: 'a1',
            },
            {
                id: 2,
                title: 'Встреча с друзьями',
                text: 'a1',
            },
            {
                id: 3,
                title: 'Совещание на работе',
                text: 'a1',
            },
            {
                id: 4,
                title: 'Купить хлеб',
                text: 'a1',
            },
            {
                id: 5,
                title: 'Забрать посылку с почты',
                text: 'a1',
            },
        ]
    };

  render(){
    return (
        <div className="App">
            <Header/>
            <Addnote/>
        </div>
     );
  }
}
export default App;
