import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: this.props.message,
            buttonText: this.props.buttonText
        }
        // Der Scope der submit-Method wird auf Panel gebunden, damit z.B. auf this.props
        // zugegriffen werden kann.
        this.submit = this.submit.bind(this);
    }
    submit (event) {
        console.log(event)
        event.preventDefault();
        console.log('Button clicked', this.props.title);
        this.setState({buttonText: this.props.title});
    }
    render () {
        return (
            <div className="Panel">
                <div className="headline">{this.props.title}</div>
                <p className="message">
                    {this.props.children}
                </p>
                <p>
                    Additional content: {this.state.message}
                </p>
                <button onClick={this.submit}>{this.state.buttonText}</button>
            </div>
        );
    }
}

Panel.defaultProps = {
  message: 'Ich bin nur der Vorbelegungs-Text ^ ^',
  buttonText: 'Click me'
}

export default Panel;