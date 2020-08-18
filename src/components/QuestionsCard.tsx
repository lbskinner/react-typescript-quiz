import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer, index) => (
        <div key={index}>
          <button disabled={userAnswer} value={answer} onClick={callback}>
            {/* use  dangerouslySetInnerHTML to render the answer as html  */}
            <span dangerouslySetInnerHTML={{ __html: answer }} />
            {/* {answer} */}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
