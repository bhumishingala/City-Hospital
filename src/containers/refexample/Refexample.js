import React, { useRef } from 'react';

function Refexample(props) {
    const nameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    const hadleSubmit = () => {
        console.log(nameRef.current.value,emailRef.current.value ,mobileRef.current.value);

        nameRef.current.style.backgroundColor = 'red ';
        emailRef.current.focus();
        mobileRef.current.style.fontWeight = 300;
    }

    return (
        <div>
            <input ref={nameRef} type="text" placeholder="Please Enter Your Name" name="name"/>
            <input ref={emailRef} type="text" placeholder="Please Enter Your Email" name="email"/>
            <input ref={mobileRef} type="text" placeholder="Please Enter Your Mobile Number" name="mobile"/>
            <button onClick={() => hadleSubmit()}>Submit</button>
        </div>
    );
}

export default Refexample;