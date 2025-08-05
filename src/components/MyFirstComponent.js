import React from "react";

const MyFirstComponent = () => {
    const button = () => {
        alert('My first alert!')
    }

    return(
        <><p>Hello, React!</p><button onClick={button}>Click me</button></>
    )
}

export default MyFirstComponent;