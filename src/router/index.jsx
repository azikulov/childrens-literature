import { Navigate, createBrowserRouter } from "react-router-dom";
import { routes } from "./constants";
import * as Screens from "../screens";

export const router = createBrowserRouter([
  {
    path: routes.ANNOTATIONS,
    element: <Screens.AnnotationsScreen />,
  },
  {
    path: routes.STUDENT_MODULE,
    element: <Screens.StudentModuleScreen />,
  },
  {
    path: routes.STUDENT_MODULE_TEST,
    element: <Screens.StudentModuleTestScreen />,
  },
  {
    path: routes.TEACHER_MODULE,
    element: <Screens.TeacherModuleScreen />,
  },

  {
    path: routes.GLOSSARY,
    element: <Screens.GlossaryScreen />,
  },
  {
    path: routes.ABOUT_AUTHORS,
    element: <Screens.AboutAuthorsScreen />,
  },
  {
    path: routes.NOT_FOUND,
    element: <Navigate to={routes.ANNOTATIONS} />,
  },
]);
