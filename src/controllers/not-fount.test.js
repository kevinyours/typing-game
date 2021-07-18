import NotFoundController from "./not-found";
import { TEMPLATE } from "../mock";

describe("Not Found Controller", () => {
 let notFound;

 beforeAll(() => {
  document.body.innerHTML = TEMPLATE;
 });

 beforeEach(() => {
  notFound = new NotFoundController();
 });

 it("should have proper instance", () => {
  expect(notFound).toBeTruthy();
  expect(notFound).toBeInstanceOf(NotFoundController);
 });

 it("should have proper rendering status", () => {
  expect(notFound.$timer.element).not.toBeVisible();
  expect(notFound.$score.element).not.toBeVisible();
  expect(notFound.$input.element).not.toBeVisible();

  const summary = notFound.$notice.element.querySelector(".summary");
  expect(notFound.$notice.element).toBeVisible();
  expect(summary.innerText).toEqual("Page Not Found.");

  expect(notFound.$primaryBtn.element.style.visibility).toEqual("visible");
  expect(notFound.$primaryBtn.element.innerText).toBe("Home");
  expect(notFound.$primaryBtn.element.dataset.navigate).toEqual("/");
 });
});
