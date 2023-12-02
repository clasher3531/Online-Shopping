import React from "react";
import { useNavigate } from 'react-router-dom';

function NJLogo() {
    const navigate = useNavigate();
    function logoClickHandler() {
        navigate('/');
    }
    return (
        <div className="text-center">
            <h1 onClick={logoClickHandler} style={{fontFamily:'fantasy', margin:'20px', cursor:'pointer'}}>VogueVista</h1>
        </div>
    )
}

export default NJLogo