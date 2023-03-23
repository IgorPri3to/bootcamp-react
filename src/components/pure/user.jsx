import React from 'react'
import PropTypes from 'prop-types'
import { User } from '../../models/user.class'

function UserComponent({ user }) {
    return (
        <ul>
            <li>
                Name: {user.name} {user.last_name}
            </li>
            <li>
                Email: {user.email}
            </li>
            <li>
                Status: {user.online ? 'Online' : 'Offline'}
            </li>
        </ul>
    )
}

UserComponent.propTypes = {
    user: PropTypes.instanceOf( User )
}

export default UserComponent
