import createPage from "./pages";
import { TEMPLATE } from "./mock";
import Home from "./controllers/home";
import Quiz from "./controllers/quiz";
import Result from "./controllers/result";
import PageNotFound from "./controllers/not-found";

describe("Pages", () => {
 let pages;

 beforeAll(() => {
  document.body.innerHTML = TEMPLATE;
 });

 beforeEach(() => {
  pages = createPage();
  jest.clearAllMocks();
 });

 it("should return prepared instance", () => {
  expect(pages).toBeTruthy();
  expect(pages.home()).toBeInstanceOf(Home);
  expect(pages.quiz()).toBeInstanceOf(Quiz);
  expect(pages.result()).toBeInstanceOf(Result);
  expect(pages.notFound()).toBeInstanceOf(PageNotFound);
 });
});
