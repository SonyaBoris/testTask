import LOGO from "../../assets/images/logo.png"
import { Link } from 'react-scroll';
import "./header.css"
import { useState } from "react";
import Burger from "./Burger";

const Header = () => {

  const [burger, setBurger] = useState(false)

  const handleClick = () => {
    setBurger(!burger)
  }
  return (
    <header>
      <div className="container header">
        <Link
          activeClass="active"
          to="BlockStart"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={handleClick}
        >
          <div className="logo">
            <img className="logo__img" src={LOGO} alt="логотип компании" />
            <span className={burger ? "logo__black" : "logo__white"}>testLab</span>
          </div>
        </Link>
        <div onClick={handleClick} className={burger ? "burger__open" : "burger__close"}>
          <span className="burger"></span>
        </div>
        {
          burger && <Burger handleClick={handleClick} />
        }
        <nav className="header__nav" >
          <Link
            className="header__nav-link"
            activeClass="active"
            to="BlockHowItWork"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Как это работает
          </Link>
          <Link
            className="header__nav-link"
            activeClass="active"
            to="BlockThird"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            3-й блок
          </Link>
          <Link
            className="header__nav-link"
            activeClass="active"
            to="BlockQuestionsAnswers"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Вопросы и ответы
          </Link>
          <Link
            className="header__nav-link"
            activeClass="active"
            to="BlockForm"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Форма
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;