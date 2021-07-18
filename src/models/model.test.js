import Model, { INITIAL_STATE } from "./model";
import { DUMMY } from "../mock";

const mockListener = jest.fn();
const spy = jest
 .spyOn(Model.prototype, "useObserver", "get")
 .mockReturnValue(mockListener);

describe("Model", () => {
 let model;

 beforeEach(() => {
  model = new Model();
  mockListener.mockClear();
 });

 it("should return state same as initial state", () => {
  const state = model.state;

  expect(state).toEqual({
   addListener: expect.any(Function),
   ...INITIAL_STATE,
  });
 });

 it("should able to set value by its method", () => {
  const state = model.state;
  state.cursor = 10;

  expect(state.cursor).toEqual(10);

  state.score = {
   credit: 10,
   time: 1230,
   cnt: 9,
  };

  expect(state.score).toEqual({
   credit: 10,
   time: 1230,
   cnt: 9,
  });

  model.init();

  expect(state).toEqual({
   addListener: expect.any(Function),
   ...INITIAL_STATE,
  });
 });

 it("should change property when switching quiz", () => {
  model.init();
  model.load();
  expect(model.state.cursor).toBe(DUMMY.length);
  expect(model.switch()).toBe(true);
  expect(model.state.cursor).toEqual(DUMMY.length);
  expect(model.switch()).toBe(true);
 });

 it("should update score", () => {
  model.state.quiz = {
   word: "test",
   remain: 12,
  };

  model.update(10); // 2
  model.state.quiz.remain = 10;
  model.update(1); // 9
  model.state.quiz.remain = 15;
  model.update(5); // 10
  model.update(7); // 8

  expect(model.state.score).toEqual({
   credit: 4,
   time: 29,
   cnt: 4,
  });
 });

 it("tests useObserver method", () => {
  const observer = model.useObserver;

  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledTimes(1);
  expect(observer).toEqual(mockListener);

  observer();
  expect(mockListener).toHaveBeenCalled();
 });
});
