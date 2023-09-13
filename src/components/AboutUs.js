import React from 'react';
// import { useNavigate } from "react-router-dom";
import { Link,Outlet } from 'react-router-dom';

const AboutUs = ()=>  {
    // const navigate = useNavigate();

    // const clickHandler =()=>{
    //     navigate("/");
    //     // navigate(-1);
    // }

        return (
            <div>
           
                <h1>About Us</h1>
                <Outlet/>
                {/* <button onClick={clickHandler}>GO Home</button> */}
                <ul>
                    <li>
                        <Link to="programmers">Programmers</Link>
                    </li>
                    <li>
                        <Link to="drivers">Drivers</Link>
                    </li>
                </ul>
            </div>
        );
}

export default AboutUs;