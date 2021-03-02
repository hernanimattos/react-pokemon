import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Menu.scss';

const Menu = ({ getTerm, submit, getTypeSearch }) => {
    return (
        <header className="header">
            <nav className="container fx">
                <Link to="/">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </Link>

                <form className="form">
                    <div className="row ">
                        <div className="form-wrapper__input">
                            <div className="input-form">
                                <label htmlFor="name"> Nome ou número</label>
                                <input
                                    id="name"
                                    type="radio"
                                    name="search"
                                    value="name"
                                    onChange={getTypeSearch}
                                    defaultChecked
                                />
                            </div>
                            <div className="input-form">
                                <label htmlFor="ability"> habilidade</label>
                                <input
                                    id="ability"
                                    type="radio"
                                    name="search"
                                    value="ability"
                                    onChange={getTypeSearch}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row row-search">
                        <div className="row-input_search">
                            <input
                                type="search"
                                className="search"
                                onChange={getTerm}
                            />
                        </div>
                        <div className="button-search">
                            <button type="button" onClick={submit}>
                                buscar
                            </button>
                        </div>
                    </div>
                </form>
            </nav>
        </header>
    );
};

export default Menu;
