import THIRD from "../../assets/images/third.png"
import Reviews from "./Reviews";
import "./third.css"

const BlockThird = () => {
  return (
    <section>
      <div className="third container">
        <div className="third-content">
          <h3 className="third-title">
            Круто, ты дошел до третьего блока
          </h3>
          <p className="third-text">
            63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
          </p>
          <p className="third-text"> Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p>
        </div>
        <img className="third-img" src={THIRD} alt="Мужчина с грузовиком и телефоном" />
      </div>
      <Reviews />
    </section>
  );
}

export default BlockThird;