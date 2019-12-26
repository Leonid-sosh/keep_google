import React from 'react';
import Header from "./header";

class Addnote extends React.Component{
    render() {
        return (
            <div className="Note_form">
                <form>
                    <div contentEditable="true"
                         aria-multiline="true"
                         role="textbox"
                         className="Note_title"
                         spellCheck="true"
                         tabIndex="0"
                         aria-label="Введите заголовок">Введите заголовок
                    </div>

                    <div contentEditable="true"
                         aria-multiline="true"
                         role="textbox"
                         className="Note_text"
                         spellCheck="true"
                         tabIndex="0"
                         aria-label="Введите заголовок">Заметка...
                    </div>
                </form>
            </div>
        );
    }
}

export default Addnote;