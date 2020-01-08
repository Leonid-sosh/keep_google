import Busket from "./busket";
import React, {Component} from 'react';

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
        ],
    };

    componentWillMount() {
        localStorage.getItem('My_notes_list') && this.setState({
            notes: JSON.parse(localStorage.getItem('My_notes_list'))
        });

        localStorage.getItem('Removed_Notes') && this.setState({
            removed_notes: JSON.parse(localStorage.getItem('Removed_Notes'))
        })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('My_notes_list', JSON.stringify(nextState.notes))
        localStorage.setItem('Removed_Notes', JSON.stringify(nextState.removed_notes));
    }

    remove = (id, title, text) => {
        if (localStorage.getItem('Filtered_notes') !== null) {
            alert ("Сначала отмените фильтр!");
        }
        else{
            this.setState({removed_notes: [...this.state.removed_notes.filter(removed_notes => removed_notes.id != id)]});
        }
    };

    undo = (id, title, text) => {
        if (localStorage.getItem('Filtered_notes') !== null) {
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
            this.setState({notes: [...this.state.notes, undo_note]}, () => localStorage.setItem('My_notes_list', JSON.stringify(this.state.notes)));
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