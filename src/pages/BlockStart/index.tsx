import Button from "../../ui/Button";
import { motion } from "framer-motion"
import { featureAnimate } from "../../ui/animate";
import "./blockStart.css"

const BlockStart = () => {

  return (
    <div className="start">
      <motion.div
        className="start__content"
        initial="hidden"
        whileInView="visible" >
        <motion.h1
          variants={featureAnimate}
          custom={.3}
          className="start__content-title">
          Говорят, никогда не поздно сменить профессию
        </motion.h1>
        <motion.span
          variants={featureAnimate}
          custom={.6}
          className="start__content-desc">
          Сделай круто тестовое задание и у тебя получится
        </motion.span>
        <motion.div
          variants={featureAnimate}
          custom={.9}>
          <Button
            type="r">
            Проще простого!
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BlockStart;