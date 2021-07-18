import CONSTANTS from "../constants";
import Input from "./input";

describe("Input", () => {
 let input;
 let $input = document.createElement("input");
 let mockCb = jest.fn();

 beforeEach(() => {
  input = new Input($input).on(CONSTANTS.SUBMIT, mockCb);
  jest.clearAllMocks();
 });

 it("should render without crashing", () => {
  expect(input).toBeTruthy();
  expect($input).not.toBeNull();
  expect(input).toBeInstanceOf(Input);
 });

 it("should control disabled state by its method", () => {
  input.disabled(true);
  expect($input.disabled).toBe(true);

  input.disabled(false);
  expect($input.disabled).toBe(false);
 });

 it("should able to flush text data by its method", () => {
  $input.value = "test";
  expect($input.value).toEqual("test");

  input.clear();
  expect($input.value).toEqual("");
 });

 it("should catch keycode from event", () => {
  input.mount();

  $input.dispatchEvent(
   new KeyboardEvent(CONSTANTS.KEYDOWN, {
    key: "enter",
    keyCode: CONSTANTS.ENTER,
   }),
  );

  expect(mockCb).toBeCalled();
 });

 it("should able to control visibility its method", () => {
  input.mount();
  expect($input.style.visibility).toBe("visible");

  input.unmount();
  expect($input.style.visibility).toBe("hidden");
 });
});
