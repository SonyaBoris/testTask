import Card from "./Card";
import WAITING from "/waiting.png"
import DELIVERY from "/delivery-truck.png"
import SECURE from "/secure.png"
import MONEY from "/money-bags.png"
import "./howItWork.css"

const BlockHowItWork = () => {

  const actionsCard = [
    {
      id: 1,
      image: WAITING,
      text: "Прочитай задание внимательно",
      desc: "Думаю у тебя не займет это больше двух-трех минут"
    },
    {
      id: 2,
      image: DELIVERY,
      text: "Изучи весь макет заранее",
      desc: "Подумай как это будет работать на разных разрешениях и при скролле"
    },
    {
      id: 3,
      image: SECURE,
      text: "Сделай хорошо",
      desc: "Чтобы мы могли тебе доверить подобные задачи в будущем"
    },
    {
      id: 4,
      image: MONEY,
      text: "Получи предложение",
      desc: "Ну тут все просто, не я придумал правила, но думаю так и будет)))"
    },
  ]

  return (
    <>
      <section className="work">
        <div className="container">
          <h2 className="title">Как это работает</h2>
          <div className="work__actions">
            {
              actionsCard.map(card =>
                <Card key={card.id} card={card} />
              )
            }
          </div>
        </div>
      </section>
    </>

  );
}

export default BlockHowItWork;