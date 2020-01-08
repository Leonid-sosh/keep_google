import React, {Component} from 'react';
import Busket from "./busket";

class Busketpage extends Component {
    state = {
        removed_notes:[
            {
                id: 5,
                title: 'Удаленная заметка 16565',
                text: 'Текст 1',
            },
            {
                id: 6,
                title: 'Удаленная заметка 222',
                text: 'Текст 2',
            },
        ]
    };

    componentWillMount() {
        localStorage.getItem('NoteList') && this.setState({
            notes: JSON.parse(localStorage.getItem('NoteList'))
        });

        localStorage.getItem('Dell_note_list') && this.setState({
            removed_notes: JSON.parse(localStorage.getItem('Dell_note_list'))
        })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('NoteList', JSON.stringify(nextState.notes))
        localStorage.setItem('Dell_note_list', JSON.stringify(nextState.removed_notes));
    }

    remove = (id, title, text) => {
        if (localStorage.getItem('FilteredNotes') !== null) {
            alert ("Сначала отмените фильтр!");
        }
        else{
            this.setState({removed_notes: [...this.state.removed_notes.filter(removed_notes => removed_notes.id != id)]});
        }
    };

    undo = (id, title, text) => {
        if (localStorage.getItem('FilteredNotes') !== null) {
            alert ("Сначала отмените фильтр!");
        }
        else {
            this.setState({removed_notes: [...this.state.removed_notes.filter(removed_notes => removed_notes.id != id)]});

            const len = this.state.notes.length;
            let max_id = 0;
            for (let i = 0; i < len; i++) {
                if (this.state.notes[i].id > max_id) {
                    max_id = this.state.notes[i].id;
                }
            }
            const undo_note = {
                id: max_id + 1,
                title: title,
                text: text,
            };
            this.setState({notes: [...this.state.notes, undo_note]}, () => localStorage.setItem('NoteList', JSON.stringify(this.state.notes)));
        }
    };

    render() {
        return (
            <React.Fragment>
                <h1>Корзина</h1>
                <Busket removed_notes={this.state.removed_notes}
                        notes={this.state.notes}
                        remove={this.remove}
                        undo = {this.undo}/>
            </React.Fragment>
        );
    }
}
export default Busketpage;