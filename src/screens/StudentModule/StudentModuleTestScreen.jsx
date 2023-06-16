import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Layout } from "../../components/Layout";
import { tests } from "../../data/tests";
import "./StudentModule.css";

export function StudentModuleTestScreen() {
  const params = useParams();

  const [currentTests, setCurrentTests] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  function handleCompleteTest() {
    setIsCompleted(true);
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
              <h2 className="test-container__title">{currentTest.title}</h2>

              <div
                className="test-container__content"
                dangerouslySetInnerHTML={{
                  __html: currentTest.content,
                }}
              ></div>

              {currentTest.tests?.map((test, index) => (
                <div key={index} className="tests">
                  <h3 className="tests__title">{test.title}</h3>

                  <div className="answers">
                    <ul className="answers-list">
                      {test.answers.map((answer, index) => (
                        <label key={index}>
                          <input
                            disabled={isCompleted}
                            hidden
                            type="radio"
                            name={currentTest.title}
                          />
                          <li
                            className={`answers-item ${
                              isCompleted &&
                              (test.correct === answer ? "correct" : "wrong")
                            }`}
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

          {!isCompleted && (
            <button
              onClick={handleCompleteTest}
              className="test-container__complete-button"
            >
              Завершить
            </button>
          )}
        </div>
      </main>
    </Layout>
  );
}
