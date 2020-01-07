import React from 'react';
import NoteItem from "./noteitem";
import PropTypes from 'prop-types'

class Notes extends React.Component{
    render() {
        return this.props.notes.map(
            (notes) => (
                <NoteItem key={notes.id}
                          notes={notes}
                          delNote={this.props.delNote}
                />

            ));
    }
}

Notes.propTypes = {
    notes: PropTypes.array.isRequired
};

export default Notes;