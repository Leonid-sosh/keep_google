import React, {Component} from 'react';
import Busket from "./busket";
import AddNote from "../addNote";

class Busketpage extends Component {

    state = {
        removed_notes:[
            {
                id: 5,
                title: 'Удаленная заметка 1',
                text: 'Текст 1',
            },
            {
                id: 6,
                title: 'Удаленная заметка 2',
                text: 'Текст 2',
            },
        ]
    };

    render() {
        return (
            <React.Fragment>
                <h1>Корзина</h1>
                <Busket removed_notes={this.state.removed_notes}/>
            </React.Fragment>
        );
    }
}
export default Busketpage;