import React from 'react';
import '../assets/styles/main.css'
import {Link} from "react-router-dom";
import logo from "../assets/images/logo.svg";
import {FormText} from "react-bootstrap";
import hoodie from "../assets/styles/hoodie.png";
function Generator(props) {
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                crossOrigin="anonymous"
            />
            <div className="header">
                <div className="logo">
                    <Link to='/'><img src={logo} alt=""/></Link>
                </div>
                <div className="links">

                    <div className="link">
                        Конструктор
                    </div>
                    <div className="link">
                        AI Генератор
                    </div>
                    <div className="link">
                        Коллекции
                    </div>
                </div>
            </div>
            <div className="cont">
                <div className="titel">
                    Введите свой запрос на принт
                    <img src={hoodie} alt="" className="img__h"/>

                </div>
                <div className="area">
                    <textarea maxlength="30">
                    </textarea>
                    <button className="btn">Отправить</button>

                </div>
            </div>
        </div>
    );
}

export default Generator;