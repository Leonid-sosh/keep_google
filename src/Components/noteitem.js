import React from 'react';
import PropTypes from 'prop-types'

class NoteItem extends React.Component{

    render() {
        const {id, title, text} = this.props.notes;
        return (
            <div className="Note_Item">
                <p className="title">{title}</p>

                <p className="text">{text}</p>

                <div className="add_Note"
                     role="button"
                     onClick={this.props.delNote.bind(this, id)}>
                    <p>Удалить</p>
                </div>

            </div>

        );
    }
}

NoteItem.propTypes = {
    notes: PropTypes.object.isRequired
};

export default NoteItem;