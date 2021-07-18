import ResultController from "./result";
import Model from "../models/model";
import { TEMPLATE } from "../mock";

describe("Result Controller", () => {
 let result;
 let model = new Model();

 beforeAll(() => {
  document.body.innerHTML = TEMPLATE;
 });

 beforeEach(() => {
  model.state.score = {
   credit: 10,
   time: 31,
   cnt: 10,
  };

  result = new ResultController();

  jest.clearAllMocks();
 });

 it("should render without crashing", () => {
  expect(result).toBeTruthy();
  expect(result).toBeInstanceOf(ResultController);
  expect(result.state).toEqual(model.state);
 });

 it("should have proper layout", () => {
  expect(result.$timer.element).not.toBeVisible();
  expect(result.$score.element).not.toBeVisible();
  expect(result.$input.element).not.toBeVisible();
  expect(result.$notice.element).toBeVisible();

  const title = result.$notice.element.querySelector(".title");
  const info = result.$notice.element.querySelector(".info");
  const summary = result.$notice.element.querySelector(".summary");

  const sum = model.state.score.credit;
  const avg = result.getAverage(model.state.score.time, model.state.score.cnt);

  expect(title.innerText).toEqual("Mission Complete!");
  expect(summary.innerText).toEqual(`Final score is ${sum}.`);
  expect(info.innerText).toEqual(`Average typing time is ${avg} second.`);

  expect(result.$primaryBtn.element.style.visibility).toEqual("visible");
  expect(result.$primaryBtn.element.innerText).toEqual("Retry");
  expect(result.$primaryBtn.element.dataset.navigate).toEqual("/");
 });
});
