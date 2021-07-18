import Home from "./controllers/home";
import Quiz from "./controllers/quiz";
import Result from "./controllers/result";
import PageNotFound from "./controllers/not-found";

export default () => {
 const home = () => new Home();

 const quiz = () => new Quiz();

 const result = () => new Result();

 const notFound = () => new PageNotFound();

 return {
  home,
  quiz,
  result,
  notFound,
 };
};
