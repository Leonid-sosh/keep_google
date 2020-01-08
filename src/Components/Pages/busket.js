import React from 'react';
import PropTypes from 'prop-types';
import BucketItem from "../busketitem";

class Busket extends React.Component{
    render() {
        return this.props.removed_notes.map(
            (removed_notes) => (
                <BucketItem key={removed_notes.id}
                          removed_notes={removed_notes}
                          remove={this.props.remove}
                          undo={this.props.undo}
                />
            ));
    }
}

Busket.propTypes = {
    removed_notes: PropTypes.array.isRequired
};

export default Busket;