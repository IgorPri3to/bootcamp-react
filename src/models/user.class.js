export class User {
    name = '';
    last_name = '';
    email = '';
    online = '';

    constructor(
        name,
        last_name,
        email,
        online
    ) {
        this.name = name;
        this.last_name = last_name; 
        this.email = email;
        this.online = online;
    }
}