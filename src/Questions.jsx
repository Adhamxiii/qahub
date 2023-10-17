import { useContext } from "react";
import { QuestionsContext } from "./App";
const Questions = () => {
  const { title, author, date } = useContext(QuestionsContext);

  return (
    <div className="question">
      <div className="container">
        <p className="letter">Q</p>
        <p>
          {title}
          <br />
          <span>{author}</span> - <span>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default Questions;
