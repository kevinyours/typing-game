import View from "./view";

describe("View", () => {
 let view;
 let cb = jest.fn();

 beforeEach(() => {
  view = new View(document.createElement("div"));
  jest.clearAllMocks();
 });

 it("should have no registered events", () => {
  expect(view.eventHandlers).toEqual({});
 });

 it("should able to add events and receiving data from event", () => {
  view.on("@test", cb);
  view.emit("@test", "!!!");

  expect(cb).toHaveBeenCalled();
  expect(cb).toHaveBeenCalledTimes(1);
 });

 it("should able to access event object by its own event listener", () => {
  view.on("click", cb);
  view.emit("click", "!");
  expect(cb).toHaveBeenCalled();
  expect(cb).toHaveBeenCalledTimes(1);
  expect(view.eventHandlers["click"]).toEqual(cb);

  view.destroy("click");
  expect(view.eventHandlers).toEqual({});

  view.emit("click", "!!");
  expect(cb).not.toHaveBeenCalledTimes(2);
 });
});
