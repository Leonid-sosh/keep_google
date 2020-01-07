import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {note_title: '', filter: '', clear_filter: ''};
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({note_title: ''});
    };

    onChange_note = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.filter(this.state.note_title);
    };

    render() {
        return (
            <div className="search_1">
                <div className="search_btn" role="button" type="submit" onClick={this.onSubmit}>
                    <svg className="Search_svg" focusable="false" height="24px" width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path>
                    </svg>
                </div>

                <input className="search" value={this.state.note_title} name='note_title' placeholder="Поиск" type="text" aria-hidden="true" onChange={this.onChange_note}/>

                <div className="clean" role="button" onClick={this.onClick}>
                    <svg className="Search_svg" focusable="false" height="24px" width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                </div>
            </div>
        )
    }
}

Filter.propTypes = {
    filter: PropTypes.func.isRequired,
    nofilter: PropTypes.func.isRequired
};

export default Filter;