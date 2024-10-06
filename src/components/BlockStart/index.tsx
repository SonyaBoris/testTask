import Button from "../../ui/Button";
import "./blockStart.css"

const BlockStart = () => {
  return (
    <div className="start">
      <div className="start__content">
        <h1 className="start__content-title">Говорят, никогда не поздно сменить профессию</h1>
        <span className="start__content-desc">Сделай круто тестовое задание и у тебя получится</span>
        <Button type="r">Проще простого!</Button>
      </div>
    </div>
  );
}

export default BlockStart;