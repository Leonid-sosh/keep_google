import React from 'react';
import PropTypes from 'prop-types'

class BusketItem extends React.Component{



    render() {
        const {id, title, text} = this.props.removed_notes;
        return (
            <div className="Note_Item">
                    <p className="title">{title}</p>

                    <p className="text">{text}</p>

                    <div className="add_Note"
                         role="button"
                         onClick={this.props.remove.bind(this, id, title, text)}
                    >
                        <p>Удалить</p>
                    </div>

                    <div className="add_Note1"
                         role="button"
                         onClick={this.props.undo.bind(this, id, title, text)}
                    >
                        <p>Восстановить</p>
                    </div>
            </div>
        );
    }
}

BusketItem.propTypes = {
    removed_notes: PropTypes.object.isRequired
};

export default BusketItem;