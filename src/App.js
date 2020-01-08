import React from 'react';
import './App.css';
import AddNote from "./Components/addNote";
import Notes from "./Components/notes";
import Filter from "./Components/filter";
import SideMenu from "./Components/SideMenu";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Busket from "./Components/Pages/busket";
import Busketpage from "./Components/Pages/busketpage";


class App extends React.Component{

    state = {
        notes:[
            {
                id: 1,
                title: 'Адрес',
                text: 'Москва, Волгоградский проспект, 21',
            },
            {
                id: 2,
                title: 'Телефон',
                text: '89969732603',
            },
        ],

    };

    componentWillMount() {
        localStorage.getItem('My_notes_list') && this.setState({
            notes: JSON.parse(localStorage.getItem('My_notes_list'))
        });

        localStorage.getItem('Dell_note_list') && this.setState({
            removed_notes: JSON.parse(localStorage.getItem('Dell_note_list'))
        })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('My_notes_list', JSON.stringify(nextState.notes))
        localStorage.setItem('Removed_Notes', JSON.stringify(nextState.removed_notes));
    }


    delNote = (id, title, text) => {
        if (localStorage.getItem('Filtered_notes') !== null) {
            alert ("Сначала отмените фильтр!");
        }
        else {
            this.setState({notes: [...this.state.notes.filter(notes => notes.id != id)]});

            const len1 = this.state.removed_notes.length;
            let max_id1 = 0;
            for (let i = 0; i < len1; i++) {
                if (this.state.removed_notes[i].id > max_id1) {
                    max_id1 = this.state.removed_notes[i].id;
                }
            }
            const newDellNote = {
                id: max_id1 + 1,
                title: title,
                text: text,
            };
            this.setState({removed_notes: [...this.state.removed_notes, newDellNote]}, () => localStorage.setItem('Removed_Notes', JSON.stringify(this.state.removed_notes)));
        }
    };


    addNote = (title, text) => {
        if (localStorage.getItem('Filtered_notes') !== null) {
            alert ("Сначала отмените фильтр!");
        }
        else {
            const len = this.state.notes.length;
            let max_id = 0;
            for (let i = 0; i < len; i++) {
                if (this.state.notes[i].id > max_id) {
                    max_id = this.state.notes[i].id;
                }
            }
            const newNote = {
                id: max_id + 1,
                title: title,
                text: text,
            };
            this.setState({notes: [...this.state.notes, newNote]}, () => localStorage.setItem('My_notes_list', JSON.stringify(this.state.notes)));
        }
    };

    filter = (titletext) => {
        if (localStorage.getItem('Filtered_notes') !== null) {
            alert ("Сначала отмените фильтр!");
        }

        else {
            localStorage.setItem('Filtered_notes', JSON.stringify(this.state.notes));
            this.setState({notes: [...this.state.notes.filter(notes => notes.title.toLowerCase().indexOf(titletext.toLowerCase()) !== -1 )]});
        }

    };

    clear_filter = () => {
        if (localStorage.getItem('Filtered_notes') !== null) {
            this.setState({ notes: JSON.parse(localStorage.getItem('Filtered_notes')) });
            localStorage.removeItem("Filtered_notes");
        }
    };

  render(){
    return (
        <Router>
        <div className="App">
            <header>
                <div className="gb_uc" aria-expanded="true" aria-label="Главное меню" role="checkbox" tabIndex="0">
                    <input type="checkbox" id="nav-toggle" hidden/>

                    <SideMenu/>

                    <label htmlFor="nav-toggle" onClick>
                        <svg
                            className="Header_svg"
                            viewBox="0 0 24 24"
                            type="checkbox">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </label>
                </div>
                <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"/>
                <a><span className="keep">Keep</span></a>
                <Filter clear_filter={this.clear_filter} filter={this.filter}/>
                <div className="Tool_bar">
                    <svg className="Header_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M13 9v2h7V4h-2v2.74C16.53 5.07 14.4 4 12 4c-2.21 0-4.21.9-5.66 2.34S4 9.79 4 12c0 4.42 3.58 8 8 8 2.21 0 4.21-.9 5.66-2.34l-1.42-1.42A5.98 5.98 0 0 1 12 18c-3.31 0-6-2.69-6-6 0-1.65.67-3.15 1.76-4.24A5.98 5.98 0 0 1 12 6a6.01 6.01 0 0 1 5.19 3H13z"/>
                    </svg>
                    <svg className="Header_svg" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                        <path d="M20,9 L4,9 L4,5 L20,5 L20,9 Z M20,19 L4,19 L4,15 L20,15 L20,19 Z M3,3 C2.45,3 2,3.45 2,4 L2,10 C2,10.55 2.45,11 3,11 L21,11 C21.55,11 22,10.55 22,10 L22,4 C22,3.45 21.55,3 21,3 L3,3 Z M3,13 C2.45,13 2,13.45 2,14 L2,20 C2,20.55 2.45,21 3,21 L21,21 C21.55,21 22,20.55 22,20 L22,14 C22,13.45 21.55,13 21,13 L3,13 Z"/>
                    </svg>
                    <svg className="Header_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"/>
                        <circle cx="12" cy="12" r="3.5"/>
                    </svg>
                </div>
            </header>

            <Route exact path='/' render={props => (
                <React.Fragment>
                    <AddNote addNote={this.addNote}/>
                    <Notes notes={this.state.notes}
                           delNote={this.delNote}/>
                </React.Fragment>
            )}/>
            <Route path='/buscketpage'
                   component={Busketpage}/>
        </div>
        </Router>
     );
  }
}
export default App;
