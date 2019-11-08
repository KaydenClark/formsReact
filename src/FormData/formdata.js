import React from 'react';
import ReactDOM from 'react-dom';
import './formdata.css';

export default class FormData extends React.Component {
    state = {};
    constructor(props) {
        super(props);
    }

    render() {
        let title = this.props.title || "FormData";

        return (
            <div>
                <h2>{title}</h2>
                <form onSubmit = {(event) => {this.onSubmit(event)}}>
                    <button type = "submit">submit</button>
                </form>
            </div>
        )
    }
}