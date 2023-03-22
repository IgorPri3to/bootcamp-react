import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Greetings extends Component {
    static propTypes = { name: PropTypes.string }

    constructor(props) {
        super(props);
        this.state = {
            age: 29
        }
    }

    birthday = () => {
        this.setState((prevState) => (
                {
                    age: prevState.age + 1
                }
            )
        )
    }

    render() {
        return (
            <div>
                <h1>
                    Greetings { this.props.name }!
                </h1>
                <h2>
                    Your age is: { this.state.age }
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Birthday
                    </button>
                </div>
            </div>
        )
    }
}
