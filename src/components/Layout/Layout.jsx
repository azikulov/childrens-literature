import { Link } from "react-router-dom";
import { routes } from "../../router/constants";
import LogoPNG from "../../assets/images/logo.png";

export function Layout({ children, activeLink }) {
  return (
    <div className="container">
      <header className="header">
        <img className="header__logo" src={LogoPNG} alt="" />

        <div className="header__inner-wrapper">
          <h1 className="header__title">«В МИРЕ ДЕТСКОЙ ЛИТЕРАТУРЫ»</h1>
          <p className="header__subtitle">
            Автоматизированная обучающая программа по формированию читательской
            грамотности для младших школьников
          </p>

          <div className="header__authors">
            <span> Одинцова С.А. </span>
            <span> Кошикова А.Ж. </span>
          </div>
        </div>
      </header>

      <aside className="sidebar">
        <ul className="sidebar__nav">
          <li className="sidebar__nav-item">
            <Link
              to={routes.ANNOTATIONS}
              className={`sidebar__nav-link ${
                activeLink === "annotations" && "active"
              }`}
            >
              <span className="sidebar__nav-link_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </span>
              <span> Аннотация </span>
            </Link>
          </li>

          <li className="sidebar__nav-item">
            <Link
              className={`sidebar__nav-link ${
                activeLink === "teacher-module" && "active"
              }`}
              to={routes.TEACHER_MODULE}
            >
              <span className="sidebar__nav-link_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </span>
              <span> Модуль для учителя </span>
            </Link>
          </li>

          <li className="sidebar__nav-item">
            <Link
              className={`sidebar__nav-link ${
                activeLink === "student-module" && "active"
              }`}
              to={routes.STUDENT_MODULE}
            >
              <span className="sidebar__nav-link_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </span>
              <span> Модуль для ученика </span>
            </Link>
          </li>

          <li className="sidebar__nav-item">
            <Link
              className={`sidebar__nav-link ${
                activeLink === "glossary" && "active"
              }`}
              to={routes.GLOSSARY}
            >
              <span className="sidebar__nav-link_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                  />
                </svg>
              </span>
              <span> Глоссарий </span>
            </Link>
          </li>

          <li className="sidebar__nav-item">
            <Link
              className={`sidebar__nav-link ${
                activeLink === "about-authors" && "active"
              }`}
              to={routes.ABOUT_AUTHORS}
            >
              <span className="sidebar__nav-link_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </span>
              <span className="sidebar__nav-link_content"> Об авторах </span>
            </Link>
          </li>
        </ul>
      </aside>

      {children}
    </div>
  );
}
