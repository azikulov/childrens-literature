import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Layout } from "../../components/Layout";
import { tests } from "../../data/tests";
import "./StudentModule.css";

export function StudentModuleTestScreen() {
  const params = useParams();

  const [currentTests, setCurrentTests] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);

  function handleCompleteTest() {
    setIsCompleted(true);
  }

  function handleSelectAnswer() {
    setTotalCorrectAnswers(totalCorrectAnswers + 1);
  }

  useEffect(() => {
    if (params.id && params.type) {
      setCurrentTests(tests[params.type]["variant_" + params.id]);
    }
  }, []);

  return (
    <Layout activeLink="student-module">
      <main className="main">
        <div className="test-container">
          {currentTests?.map((currentTest, index) => (
            <div key={index} className="test-container__item">
              <h2
                className="test-container__title"
                dangerouslySetInnerHTML={{ __html: currentTest.title }}
              />

              <div
                className="test-container__content"
                dangerouslySetInnerHTML={{
                  __html: currentTest.content,
                }}
              ></div>

              {currentTest.tests?.map((test, index) => (
                <div key={index} className="tests">
                  <h3
                    dangerouslySetInnerHTML={{ __html: test.title }}
                    className="tests__title"
                  />

                  <div className="answers">
                    <ul className="answers-list">
                      {test.answers.map((answer, index) => (
                        <label key={index}>
                          <input
                            disabled={isCompleted}
                            hidden
                            type="radio"
                            name={test.title}
                          />
                          <li
                            className={`answers-item ${
                              isCompleted &&
                              (test.correct === answer ? "correct" : "wrong")
                            }`}
                            onClick={
                              test.correct === answer
                                ? handleSelectAnswer
                                : null
                            }
                          >
                            <span>{answer}</span>
                          </li>
                        </label>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {!isCompleted ? (
            <button
              onClick={handleCompleteTest}
              className="test-container__complete-button"
            >
              Завершить
            </button>
          ) : (
            <div className="footer">
              <div className="back">
                <Link className="back__btn" to="/student-module">
                  Назад
                </Link>
              </div>

              <div className="correct-answers">
                <span className="correct-answers__text">
                  Правильные ответы: {totalCorrectAnswers}
                </span>
              </div>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
