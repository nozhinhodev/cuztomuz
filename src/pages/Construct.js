import React from 'react';
import logo from "../assets/images/logo.svg";
import '../assets/styles/main.css'
import hoodie from '../assets/styles/hoodie.png'
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import {Link} from "react-router-dom";


function Construct(props) {
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
        <div className="main__content">
            <div className="pic">
               <img src={hoodie} alt="" className="img__h"/>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="sizes">
                <div className="s">s</div>
                <div className="s">m</div>
                <div className="s">l</div>
                <div className="s">xl</div>
                <div className="s">xxl</div>
            </div>
            <div className="upl">
                <UploadAndDisplayImage/>
            </div>
            <br/>
            <br/>
            <div className="snd">
                <button className="btn">Отправить</button>
            </div>
        </div>

            <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossOrigin></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin></script>

            <script>var Alert = ReactBootstrap.Alert;</script>
        </div>

    );
}


export default Construct;