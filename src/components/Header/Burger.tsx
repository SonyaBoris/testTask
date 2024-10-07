import { Link } from 'react-scroll';
import ARROW from "../../assets/images/right.png"
import { FC } from 'react';

type Props = {
  handleClick: () => void;
}
const Burger: FC<Props> = ({ handleClick }) => {
  return (
    <nav className='burger__menu' >
      <Link
        className="burger__menu-link"
        activeClass="active"
        to="BlockHowItWork"
        spy={true}
        smooth={true}
        offset={50}
        duration={500} 
        onClick={handleClick}
      >
        Как это работает
        <img className="burger__menu-link__icon" src={ARROW} alt="Стрелка вправо" />
      </Link>
      <Link
        className="burger__menu-link"
        activeClass="active"
        to="BlockThird"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={handleClick}
      >
        3-й блок
        <img className="burger__menu-link__icon" src={ARROW} alt="Стрелка вправо" />
      </Link>
      <Link
        className="burger__menu-link"
        activeClass="active"
        to="BlockQuestionsAnswers"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={handleClick}
      >
        Вопросы и ответы
        <img className="burger__menu-link__icon" src={ARROW} alt="Стрелка вправо" />
      </Link>
      <Link
        className="burger__menu-link"
        activeClass="active"
        to="BlockForm"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={handleClick}
      >
        Форма
        <img className="burger__menu-link__icon" src={ARROW} alt="Стрелка вправо" />
      </Link>
    </nav>
  );
}

export default Burger;