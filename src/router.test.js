import createRouter from "./router";
import CONSTANTS from "./constants";
import { TEMPLATE } from "./mock";

describe("Router", () => {
 let router;
 let $button;
 let mockHome = jest.fn();
 let mockQuiz = jest.fn();
 let mockResult = jest.fn();
 let mockNotFound = jest.fn();

 beforeAll(() => {
  document.body.innerHTML = TEMPLATE;
 });

 beforeEach(() => {
  router = new createRouter();
  router.addRoute("/", mockHome);
  router.addRoute("/quiz", mockQuiz);
  router.addRoute("/result", mockResult);
  router.addNotFound(mockNotFound);
  router.on(CONSTANTS.NAV_SELECTOR);
  router.start();

  $button = document.getElementById("primary-btn");

  jest.clearAllMocks();
  jest.setTimeout(3000);
 });

 it("should route to components", async () => {
  router.navigate("/");
  await new Promise(r => setTimeout(r, 100));
  expect(mockHome).toBeCalled();

  router.navigate("/quiz");
  await new Promise(r => setTimeout(r, 100));
  expect(mockQuiz).toBeCalled();

  router.navigate("/result");
  await new Promise(r => setTimeout(r, 100));
  expect(mockResult).toBeCalled();
 });

 it("should override navigation property", async () => {
  $button.dataset.navigate = "/quiz";
  $button.click();

  await new Promise(r => setTimeout(r, 100));
  expect(mockQuiz).toBeCalled();

  $button.dataset.navigate = "/";
  $button.click();

  await new Promise(r => setTimeout(r, 100));
  expect(mockHome).toBeCalled();

  $button.dataset.navigate = "/result";
  $button.click();

  await new Promise(r => setTimeout(r, 100));
  expect(mockResult).toBeCalled();
 });

 it("should route to not found component", async () => {
  router.navigate("/to");
  expect(window.location.hash).toEqual("#/to");

  await new Promise(r => setTimeout(r, 100));
  expect(mockNotFound).toBeCalled();

  $button.dataset.navigate = "/kakaopay";
  $button.click();

  await new Promise(r => setTimeout(r, 100));
  expect(mockNotFound).toBeCalled();
 });
});
