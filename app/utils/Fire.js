import firebase from 'react-native-firebase';

class Fire {

    email;

    constructor(email) {
        this.email = email;
    }

    get ref() {
        return firebase.database().ref('messages');
    }

    parse = snapshot => {
        const {timestamp: numberStamp, text, user} = snapshot.val();
        const {key: _id} = snapshot;
        const timestamp = new Date(numberStamp);
        return {
            _id,
            timestamp,
            text,
            user,
        };
    };

    on = callback =>
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));

    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }

    // send the message to the Backend
    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const {text, user} = messages[i];

            user._id = this.email;

            const message = {
                text,
                user,
                timestamp: this.timestamp,
            };
            this.append(message);
        }
    };

    append = message => this.ref.push(message);

    // close the connection to the Backend
    off() {
        this.ref.off();
    }
}

export default Fire;
