import OPEN from "../../assets/images/open.png"
import CLOSE from "../../assets/images/close.png"
import { FC, useState } from "react";
import { TQuestion } from "../../types/mocks";
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
    <div className="question">
      <div className="question__top" onClick={toggleClick}>
        <span className="question__top-title">{question.text}</span>
        <img src={`${open ? CLOSE : OPEN}`} alt="Иконка свернуть или развернуть подробности" />
      </div>
      {
        open && <div className="question__bottom">
          {question.desc}
        </div>
      }
    </div>
  );
}

export default Question;