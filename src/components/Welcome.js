// write code for Welcome component here
import React from 'react';

const Welcome = ({name}) => {
    let hi = `Hey ${name}!`;
    let greetMessage = `Welcome to Newton School.`;
    return (
        <div>
            <h1>{hi}</h1>
            <h2>{greetMessage}</h2>
        </div>
    );
};

export default Welcome;
