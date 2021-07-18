import Controller from "./controller";
import Input from "../views/input";
import Button from "../views/button";
import Number from "../views/number";
import Timer from "../views/timer";
import Notice from "../views/notice";
import { TEMPLATE } from "../mock";

describe("Controller", () => {
 let controller;

 beforeAll(() => {
  document.body.innerHTML = TEMPLATE;
 });

 beforeEach(() => {
  controller = new Controller();
  jest.clearAllMocks();
 });

 it("should render without crashing", () => {
  expect(controller).toBeTruthy();
  expect(controller).toBeInstanceOf(Controller);
 });

 it("should have proper layout", () => {
  expect(controller.$timer).not.toBeNull();
  expect(controller.$timer).toBeInstanceOf(Timer);
  expect(controller.$score).not.toBeNull();
  expect(controller.$score).toBeInstanceOf(Number);
  expect(controller.$input).not.toBeNull();
  expect(controller.$input).toBeInstanceOf(Input);
  expect(controller.$notice).not.toBeNull();
  expect(controller.$notice).toBeInstanceOf(Notice);
  expect(controller.$primaryBtn).not.toBeNull();
  expect(controller.$primaryBtn).toBeInstanceOf(Button);
 });
});
