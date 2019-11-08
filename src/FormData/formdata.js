import React from 'react';
// import ReactDOM from 'react-dom';
import './formdata.css';

export default class FormData extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    onSubmit = (event) => {
        event.preventDefault();
        if(this.props.onSubmit) this.props.onSubmit(this.state)
    }

    onChange = (event, key) => {
        this.setState({
            [key]: this[key].value
        })
    }

    renderForm = () => {
        let model = this.props.model
        let formUI = model.map((model) => {
            let key = model.key
            let type = model.type
            let props = model.props || {};

            return (
                <div key = {key}>
                    <label
                    key = {"l" + model.key}
                    htmlFor = {model.key}>
                        {model.label}
                    </label>
                    <input {...props}
                        ref = {(key) => {this[model.key]=key}}
                        type = {type}
                        key = {"i" + model.key}
                        onChange = {(event) => {this.onChange(event, key)}}
                    />
                </div>
            );
        })
        return formUI
    }

    render() {
        let title = this.props.title;

        return (
            <div>
                <h2>{title}</h2>
                <form onSubmit = {(event) => {this.onSubmit(event)}}>
                    {this.renderForm()}
                    <div>
                        <button type = "submit">submit</button>
                    </div>
                </form>
            </div>
        )
    }
}