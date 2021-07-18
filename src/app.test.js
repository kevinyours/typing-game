import { TEMPLATE } from "./mock";

describe("App", () => {
 let app;
 let header;
 let content;
 let footer;

 beforeAll(() => {
  document.body.innerHTML = TEMPLATE;
 });

 beforeEach(() => {
  app = document.getElementById("app");
  header = app.getElementsByClassName("header");
  content = app.getElementsByClassName("content");
  footer = app.getElementsByClassName("footer");
 });

 it("should render every component without crashing", () => {
  expect(app.hasChildNodes()).toBe(true);
  expect(header).not.toBeNull();
  expect(content).not.toBeNull();
  expect(footer).not.toBeNull();
 });
});
