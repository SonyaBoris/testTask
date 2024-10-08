import Articles from "../../components/Articles/Articles" 
import Question from "../../components/Question/Question"
import { mockQuestions } from "../../data/mockData";
import "./questions.css"

const BlockQuestionsAnswers = () => {
  return (
    <>
      <section className="questions">
        <div className="container">
          <h2 className="title">Вопросы и ответы</h2>
          <div>
            {
              mockQuestions.map(question =>
                <Question key={question.id} question={question} />
              )
            }
          </div>
        </div>
      </section>
      <Articles />
    </>
  );
}

export default BlockQuestionsAnswers;