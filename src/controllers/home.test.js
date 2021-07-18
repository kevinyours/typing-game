import HomeController from "./home";
import Model from "../models/model";
import { TEMPLATE } from "../mock";
import CONSTANTS from "../constants";

describe("Home Controller", () => {
 let home;

 beforeAll(() => {
  document.body.innerHTML = TEMPLATE;
 });

 beforeEach(() => {
  home = new HomeController();
  jest.clearAllMocks();
 });

 it("should render without crashing", () => {
  expect(home).toBeTruthy();
  expect(home).toBeInstanceOf(HomeController);
  expect(home.actions).toBeInstanceOf(Model);
 });

 it("should have proper layout", () => {
  expect(home.$timer.element.style.visibility).toEqual("visible");
  expect(home.$score.element.style.visibility).toEqual("visible");
  expect(home.$score.total).toEqual(0);
  expect(home.$input.element).not.toBeVisible();
  expect(home.$notice.element.style.visibility).toEqual("visible");
  expect(home.$primaryBtn.element.style.visibility).toEqual("visible");
  expect(home.$primaryBtn.element.innerText).toEqual("Ready");
 });

 it("should change event stage by click", () => {
  expect(home.status).toBe(CONSTANTS.READY);
  home.readyForInitEvent();
  expect(home.status).toBe(CONSTANTS.INIT);
  expect(home.$primaryBtn.element.innerText).toBe("Initialize");
 });

 it("should change event stage by click", async () => {
  home.readyForInitEvent();
  home.prepareNextEvent();

  expect(home.status).toBe(CONSTANTS.START);
  expect(home.$primaryBtn.element.innerText).toBe("Start");
 });

 it("should change event stage by click", async () => {
  home.readyForInitEvent();
  home.prepareNextEvent();

  home.goToGameEvent();
  expect(home.$primaryBtn.element.dataset.navigate).toEqual("/quiz");
 });
});
