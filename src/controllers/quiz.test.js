import QuizController from "./quiz";
import Model from "../models/model";
import CONSTANTS from "../constants";
import { TEMPLATE } from "../mock";

const spy = jest.spyOn(Model.prototype, "update").mockReturnValue(null);

describe("Quiz Controller", () => {
 let quiz;
 let model = new Model();
 let DUMMY;

 beforeAll(() => {
  document.body.innerHTML = TEMPLATE;
 });

 beforeEach(() => {
  DUMMY = [
   {
    second: 15,
    text: "LotteWorld",
   },
   {
    second: 15,
    text: "DisneyLand",
   },
   {
    second: 20,
    text: "WorderLand",
   },
  ];
  model.state.data = DUMMY;
  model.switch();
  quiz = new QuizController();
  jest.clearAllMocks();
 });

 it("should render without crashing", () => {
  expect(quiz).toBeTruthy();
  expect(quiz).toBeInstanceOf(QuizController);
  expect(quiz.actions).toBeInstanceOf(Model);
 });

 it("should have proper layout", () => {
  expect(quiz.$timer.element.style.visibility).toEqual("visible");
  expect(quiz.$timer.time).toBe(20);
  expect(quiz.$score.element.style.visibility).toEqual("visible");
  expect(quiz.$score.total).toEqual(0);
  expect(quiz.$input.element.style.visibility).toEqual("visible");
  expect(quiz.$notice.element.style.visibility).toEqual("visible");
  expect(quiz.$primaryBtn.element).not.toBeVisible();
 });

 it("should provide UI flow within playtime", async () => {
  jest.setTimeout(4000);

  expect(quiz.state.data).toEqual(DUMMY);

  // type answer
  quiz.$input.element.value = "WorderLand";

  // submit
  quiz.$input.element.dispatchEvent(
   new KeyboardEvent(CONSTANTS.KEYDOWN, {
    key: "enter",
    keyCode: CONSTANTS.ENTER,
   }),
  );

  await setTimeout(r => r, [1000]);

  // block typing at this moment
  expect(quiz.$input.element.disabled).toBe(true);

  // switch to next round
  expect(model.state.quiz.word).toEqual("DisneyLand");
 });

 it("should calculate score when problem solved", () => {
  // first time
  quiz.$input.element.value = "WorderLand";
  quiz.$input.element.dispatchEvent(
   new KeyboardEvent(CONSTANTS.KEYDOWN, {
    key: "enter",
    keyCode: CONSTANTS.ENTER,
   }),
  );

  expect(spy).toHaveBeenCalledWith(20);

  // second time
  quiz.$input.element.value = "DisneyLand";
  quiz.$input.element.dispatchEvent(
   new KeyboardEvent(CONSTANTS.KEYDOWN, {
    key: "enter",
    keyCode: CONSTANTS.ENTER,
   }),
  );

  expect(spy).toHaveBeenCalledWith(15);

  // third time
  quiz.$input.element.value = "LotteWorld";
  quiz.$input.element.dispatchEvent(
   new KeyboardEvent(CONSTANTS.KEYDOWN, {
    key: "enter",
    keyCode: CONSTANTS.ENTER,
   }),
  );

  expect(spy).toHaveBeenCalledWith(15);
  expect(quiz.$notice.element).not.toBeVisible();
  expect(quiz.$input.element).not.toBeVisible();
  expect(quiz.$primaryBtn.element.style.visibility).toEqual("visible");
  expect(quiz.$primaryBtn.element.innerText).toBe("Finish");
  expect(quiz.$primaryBtn.element.dataset.navigate).toEqual("/result");
 });
});
