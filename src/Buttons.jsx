import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const Buttons = ({ next, prev, random }) => {
  return (
    <div className="btn-container">
      <button onClick={prev} className="btn">
        <GrFormPrevious />
      </button>
      <button onClick={random} className="btn">
        Surprise me
      </button>
      <button onClick={next} className="btn">
        <GrFormNext />
      </button>
    </div>
  );
};

export default Buttons;
