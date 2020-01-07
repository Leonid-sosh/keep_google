import React from 'react';

class AddNote extends React.Component{

    state = {title: '', text: ''};

    onChange_new_note_title = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onChange_new_note_text = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onClick = (e) => {
        e.preventDefault();
        this.props.addNote(this.state.title, this.state.text);
        this.setState({title: ''});
        this.setState({text: ''});
    };

    render() {
        return (
            <div className="Note_form">
                <input className="new_note_title"
                       value={this.state.title}
                       name='title'
                       placeholder="Введите заголовок"
                       type="text"
                       onChange={this.onChange_new_note_title}/>

                <textarea className="new_note_text"
                          placeholder="Заметка..."
                          value={this.state.text}
                          name='text'
                          onChange={this.onChange_new_note_text}>
                </textarea>

                <div className="add_Note"
                     role="button"
                     onClick={this.onClick}>
                    <p>Добавить</p>
                </div>
            </div>
        );
    }
}

export default AddNote;