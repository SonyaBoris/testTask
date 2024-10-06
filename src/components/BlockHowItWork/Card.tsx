import { FC } from "react";
import "./howItWork.css"

type Props = {
  card: TCard
}

type TCard = {
  id: number,
  image: string,
  text: string,
  desc: string,
}

const Card: FC<Props> = ({ card }) => {
  return (
    <div className="card">
      <img className="card__image" src={card.image} alt="" />
      <div>
        <span className="card__text">{card.text}</span>
        <p className="card__desc">{card.desc}</p>
      </div>
    </div>
  );
}

export default Card;