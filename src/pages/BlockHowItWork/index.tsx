import Card from "../../components/Card/Card";
import { actionsCard } from "../../data/mockData";
import { motion } from "framer-motion"
import "./howItWork.css"
import { opacityAnimate } from "../../ui/animate";

const BlockHowItWork = () => {

  return (
    <>
      <section className="work">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={opacityAnimate}
            custom={.3}
            className="title">
            Как это работает
          </motion.h2>
          <motion.div
            className="work__actions"
            initial="hidden"
            whileInView="visible">
            {
              actionsCard.map(card =>
                <Card key={card.id} card={card} />
              )
            }
          </motion.div>
        </div>
      </section>
    </>

  );
}

export default BlockHowItWork;