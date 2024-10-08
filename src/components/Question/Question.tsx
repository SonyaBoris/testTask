import OPEN from "../../assets/images/open.png"
import CLOSE from "../../assets/images/close.png"
import { FC, useState } from "react";
import { TQuestion } from "../../types/mocks";
import { motion } from "framer-motion"
import { xmotionAnimate } from "../../ui/animate";
import "./question.css"

type Props = {
  question: TQuestion,
}

const Question: FC<Props> = ({ question }) => {

  const [open, setOpen] = useState(false)

  const toggleClick = () => {
    setOpen(!open)
  }

  return (
    <motion.div    
    variants={xmotionAnimate}
    custom={question.id * .3}className="question">
      <div className="question__top" onClick={toggleClick}>
        <span className="question__top-title">{question.text}</span>
        <img src={`${open ? CLOSE : OPEN}`} alt="Иконка свернуть или развернуть подробности" />
      </div>
      {
        open && <div className="question__bottom">
          {question.desc}
        </div>
      }
    </motion.div>
  );
}

export default Question;