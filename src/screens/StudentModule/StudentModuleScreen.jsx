import { useState } from "react";
import { Layout } from "../../components/Layout";
import { Link } from "react-router-dom";
import { routes } from "../../router/constants";
import "./StudentModule.css";

export function StudentModuleScreen() {
  const [activeScreen, setActiveScreen] = useState("literature");

  function switchScreen(name) {
    return () => setActiveScreen(name);
  }

  return (
    <Layout activeLink="student-module">
      <main className="main">
        <h1 className="main__title">Модуль для ученика</h1>

        <nav className="main__nav">
          <ul className="main__nav-list">
            <li className="main__nav-item">
              <button
                className={`main__nav-item_link ${
                  activeScreen.includes("literature") ? "active" : ""
                }`}
                onClick={switchScreen("literature")}
              >
                Работа с литературным текстом
              </button>
            </li>

            <li className="main__nav-item">
              <button
                className={`main__nav-item_link ${
                  activeScreen.includes("discontinuous") ? "active" : ""
                }`}
                onClick={switchScreen("discontinuous")}
              >
                Работа с несплошным текстом
              </button>
            </li>
          </ul>
        </nav>

        <div className="test-button-list">
          <Link
            to={routes.STUDENT_MODULE_TEST.replace(
              ":type",
              activeScreen
            ).replace(":id", 1)}
            className="test-button-item"
          >
            1 вариант
          </Link>
          <Link
            to={routes.STUDENT_MODULE_TEST.replace(
              ":type",
              activeScreen
            ).replace(":id", 2)}
            className="test-button-item"
          >
            2 вариант
          </Link>
          <Link
            to={routes.STUDENT_MODULE_TEST.replace(
              ":type",
              activeScreen
            ).replace(":id", 3)}
            className="test-button-item"
          >
            3 вариант
          </Link>
          <Link
            to={routes.STUDENT_MODULE_TEST.replace(
              ":type",
              activeScreen
            ).replace(":id", 4)}
            className="test-button-item"
          >
            4 вариант
          </Link>
          <Link
            to={routes.STUDENT_MODULE_TEST.replace(
              ":type",
              activeScreen
            ).replace(":id", 5)}
            className="test-button-item"
          >
            5 вариант
          </Link>
        </div>
      </main>
    </Layout>
  );
}
