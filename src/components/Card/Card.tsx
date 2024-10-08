import { FC } from "react";
import { TCard } from "../../types/mocks";
import { motion } from "framer-motion"
import { xmotionAnimate } from "../../ui/animate";
import "./card.css"

type Props = {
  card: TCard
}

const Card: FC<Props> = ({ card }) => {
  return (
    <motion.div 
    variants={xmotionAnimate}
    custom={card.id * .3}
    className="card">
      <img className="card__image" src={card.image} alt="" />
      <div>
        <span className="card__text">{card.text}</span>
        <p className="card__desc">{card.desc}</p>
      </div>
    </motion.div>
  );
}

export default Card;