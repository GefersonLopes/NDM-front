import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderNav, LoginNavigate } from "./style";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [goToLogin, setGoToLogin] = useState(false);
    const navigate = useNavigate();
    if (goToLogin) {
        navigate("/login");
    }

    return (
        <HeaderNav>
            <div className="div-header">
                <div className="div-logo">
                    <img className="logo" src="./xv.png" alt="Logo" />
                </div>
                <div className="div-title">
                    <h1 className="title">NDM</h1>
                </div>
            </div>
            <div
                onClick={() => setOpen(true)}
                className={open ? "none" : "div-dropdown"}
            >
                <img className="dropdown" src="./log.png" alt="Logo" />
            </div>
            <div className={open ? "none" : "buttons-header"}>
                <button className="inicio">Início</button>
                <a target="_black" href="https://github.com/GefersonLopes">
                    <button className="quem-somos">Mais sobre Geferson</button>
                </a>
            </div>
            <div className={open ? "div-menu" : "none"}>
                <div>
                    <button onClick={() => setOpen(false)}>X</button>
                </div>
                <button>Início</button>
                <a target="_black" href="https://github.com/GefersonLopes">
                    <button className="quem-somos">Mais sobre Geferson</button>
                </a>
            </div>
        </HeaderNav>
    );
};

export default Header;
