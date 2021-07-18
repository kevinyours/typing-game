import Number from "./number";

describe("Number", () => {
 let number;
 let $span = document.createElement("span");

 beforeEach(() => {
  number = new Number($span);
  jest.clearAllMocks();
 });

 it("should render without crashing", () => {
  expect(number).toBeTruthy();
  expect($span).not.toBeNull();
  expect(number).toBeInstanceOf(Number);
 });

 it("should able to manipulate text by method", () => {
  const prefix = "Prefix";
  const suffix = "suffiX";

  number.setPrefix(prefix);
  number.setSuffix(suffix);
  number.resolve();
  expect($span.innerText).toEqual(`${prefix} ${10} ${suffix}`);

  number.reset(100);
  expect($span.innerText).toEqual(`${prefix} ${100} ${suffix}`);
 });

 it("should control its visibility by its method", () => {
  number.mount();
  expect($span.style.visibility).toBe("visible");

  number.unmount();
  expect($span.style.visibility).toBe("hidden");
 });
});
