import React from 'react';
import { useNavigate } from "react-router-dom";

const AboutUs = ()=>  {
    const navigate = useNavigate();

    const clickHandler =()=>{
        navigate("/");
        // navigate(-1);
    }

        return (
            <div>
                <h1>About Us</h1>
                <button onClick={clickHandler}>GO Home</button>
            </div>
        );
}

export default AboutUs;