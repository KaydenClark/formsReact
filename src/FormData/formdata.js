import React from 'react';

import './formdata.css';

export default class FormData extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [
            {
            id: "1",
            nameFirst: "Kayden", 
            nameLast: "Clark", 
            userName: "KaydenClark725", 
            age: 19, 
            email: "kaydenclark725@gmail.com", 
            password: "passWord123"},
            ]
          }
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
        let fields = this.props.model
        let formUI = fields.map((m) => {
            let key = m.key
            let type = m.type
            let props = m.props || {};

            return (
                <div key = {key}>
                    <label
                    key = {"l" + m.key}
                    htmlFor = {m.key}>
                        {m.label}
                    </label>
                    <input {...props}
                        ref = {(key) => {this[m.key]=key}}
                        type = {type}
                        key = {"i" + m.key}
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