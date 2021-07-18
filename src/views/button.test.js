import CONSTANTS from "../constants";
import Button from "./button";

describe("Button", () => {
 let button;
 let $button = document.createElement("button");
 let mockCb = jest.fn();

 beforeEach(() => {
  button = new Button($button).on(CONSTANTS.NAV, mockCb);
  jest.clearAllMocks();
 });

 it("should render without crashing", () => {
  expect(button).toBeTruthy();
  expect($button).not.toBeNull();
  expect(button).toBeInstanceOf(Button);

  let secondButton = new Button(document.createElement("button"));
  expect(secondButton).toBeInstanceOf(Button);
  expect(secondButton).toEqual(button); // singleton
 });

 it("should able to set text by its method", () => {
  button.setText("BUTTON");
  expect($button.innerText).toBe("BUTTON");
 });

 it("should have exactly same attribute with data set by its method", () => {
  button.setNavigate("/kakao");
  expect($button.dataset.navigate).toEqual("/kakao");

  button.setNavigate("/kakaopay");
  expect($button.dataset.navigate).toEqual("/kakaopay");
 });

 it("should provide method which control disable state", () => {
  button.disabled(true);
  expect($button.disabled).toBe(true);

  button.disabled(false);
  expect($button.disabled).toBe(false);
 });

 it("should listen event from its event listener", () => {
  button.mount(); // mount 처리해야 listener 활성화
  $button.dispatchEvent(new MouseEvent(CONSTANTS.CLICK));
  expect(mockCb).toHaveBeenCalled(); // onClick 이벤트에 따라 커스텀 @nav 이벤트 트리거
 });

 it("should be controlled visibility its method", () => {
  button.mount();
  expect($button.style.visibility).toBe("visible");

  button.unmount();
  expect($button.style.visibility).toBe("hidden");
 });
});
