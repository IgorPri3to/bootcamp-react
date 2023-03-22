import React, { useState } from 'react'
import PropTypes from 'prop-types'

function GreetingsFunc(props) {
    const [age, setage] = useState(29);
    const birthday = () => {
        setage(age + 1)

    }
    
    return (
        <div>
            <h1>
                Greetings {props.name} from func!
            </h1>
            <h2>
                Your age is: {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Birthday
                </button>
            </div>
        </div>
    )
}

GreetingsFunc.propTypes = {
    name: PropTypes.string
}

export default GreetingsFunc
