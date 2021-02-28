import React from "react";
import Logo from "../../assets/logo.png";
import "./Menu.scss";

const Menu = ({ getTerm, submit, getTypeSearch }) => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <form className="form">
        <div className="row">
          <div className="form-input__form">
            <div className="input-form">
              <label htmlFor="name"> Nome ou número</label>
              <input
                id="name"
                type="radio"
                name="search"
                value="name"
                onChange={getTypeSearch}
                checked
              />
            </div>
            <div className="input-form">
              <label htmlFor="hability"> habilidade</label>
              <input
                id="hability"
                type="radio"
                name="search"
                value="hability"
                onChange={getTypeSearch}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-input__form">
            <input type="text" className="search" onChange={getTerm} />
          </div>
          <div className="form-input__form">
            <button type="button" onClick={submit}>
              buscar
            </button>
          </div>
        </div>
      </form>
    </nav>
  );
};

export default Menu;
