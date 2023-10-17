import { useContext } from "react";
import { QuestionsContext } from "./App";

const Answers = () => {
  const { answers } = useContext(QuestionsContext);
  return (
    <div className="answer">
      <div className="container">
        <p className="letter">A</p>
        <p>{answers[0].content}</p>
      </div>
    </div>
  );
};

export default Answers;
