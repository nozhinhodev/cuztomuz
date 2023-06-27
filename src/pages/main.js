import React from 'react';
import '../assets/styles/main.css'
import logo from '../assets/images/logo.svg'
import hoodie from '../assets/styles/hoodie.png'
import { Link } from 'react-router-dom';

function Main(props) {
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
                        <Link className='il' to='/construct'>Конструктор</Link>

                    </div>
                    <div className="link">
                       <Link className="il" to='/aigen'>AI Генератор</Link>
                    </div>
                    <div className="link">
                        Коллекции
                    </div>
                </div>
            </div>
            <div className="main__content">
                <div className="product__box">
                    <div className="image"><img src={hoodie} className='hoodie__pic' alt=""/></div>

                </div>
                <div className="sub__block">
                    <div className="title__card">Худи</div>
                    <div className="price__card">от 140.000 сум</div>
                    <div className="button">
                        <button className="btn">
                            <Link to='/construct'>Редактировать</Link>

                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Main;