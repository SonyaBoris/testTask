import Articles from "../../components/Articles/Articles" 
import Question from "../../components/Question/Question"
import { mockQuestions } from "../../data/mockData";
import { motion } from "framer-motion"
import { opacityAnimate } from '../../ui/animate';
import "./questions.css"

const BlockQuestionsAnswers = () => {
  return (
    <>
      <section className="questions">
        <div className="container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={opacityAnimate}
          custom={.3}
          className="title">Вопросы и ответы</motion.h2>
          <motion.div
           initial="hidden"
           whileInView="visible">
            {
              mockQuestions.map(question =>
                <Question key={question.id} question={question} />
              )
            }
          </motion.div>
        </div>
      </section>
      <Articles />
    </>
  );
}

export default BlockQuestionsAnswers;