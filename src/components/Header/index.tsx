import LOGO from "../../assets/images/logo.png"
import { Link } from 'react-scroll';
import "./header.css"

const Header = () => {

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
        >
          <img src={LOGO} alt="логотип компании" />
        </Link>
        <nav className="header__nav">
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