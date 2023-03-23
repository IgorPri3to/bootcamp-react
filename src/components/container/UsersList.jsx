import React from 'react';
import { User } from "../../models/user.class";
import UserComponent from "../pure/user";

const UsersList = () => {
    const exampleUser = new User('Igor', 'Prieto', 'igor@mail.com', false);
    return (
        <div>
            <div>
                <h1>Users:</h1>
            </div>
            {/* TODO: Use for/map to renderize a list */}
            <UserComponent user={exampleUser}></UserComponent>
        </div>
    );
}

export default UsersList;
