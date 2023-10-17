import { createContext, useState } from "react";
import Answers from "./Answers";
import Buttons from "./Buttons";
import Questions from "./Questions";
import { questions } from "./data";

export const QuestionsContext = createContext();
const App = () => {
  const [index, setIndex] = useState(0);

  const checkNumber = (num) => {
    if (num > questions.length - 1) {
      return 0;
    }
    if (num < 0) {
      return questions.length - 1;
    }
    return num;
  };

  const next = () => {
    setIndex((prevIndex) => {
      return checkNumber(prevIndex + 1);
    });
  };

  const previous = () => {
    setIndex((prevIndex) => {
      return checkNumber(prevIndex - 1);
    });
  };

  const random = () => {
    let randomIndex = Math.floor(Math.random() * questions.length);
    if (randomIndex === index) return (randomIndex = index + 1);
    setIndex(checkNumber(randomIndex));
  };

  return (
    <QuestionsContext.Provider value={questions[index]}>
      <main>
        <div className="box-container">
          <div className="header">
            <h1>FAQ</h1>
          </div>
          <section>
            <Questions />
            <Answers />
          </section>
        </div>
        <Buttons next={next} prev={previous} random={random} />
      </main>
    </QuestionsContext.Provider>
  );
};

export default App;
