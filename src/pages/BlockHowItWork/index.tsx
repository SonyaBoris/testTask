import Card from "../../components/Card/Card";
import { actionsCard } from "../../data/mockData";
import "./howItWork.css"

const BlockHowItWork = () => {

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