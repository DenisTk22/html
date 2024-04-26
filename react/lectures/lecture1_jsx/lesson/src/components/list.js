import { useState } from "react";


export function MessagesList() {
    const [message, setMessage] = useState([
        {
            id: 1,
            text: "Hello, world1!",
            heading: 'Heading1'
        },
        {
            id: 2,
            text: "Hello, world2!",
            heading: 'Heading2'
        },
        {
            id: 3,
            text: "Hello, world!3",
            heading: 'Heading3'
        }
    ]);

    return message.map(message => 
        <>
            <h2>{message.heading}</h2>
            <div key={message.id}>{message.text}</div>
        </>
    );
}

export default MessagesList;