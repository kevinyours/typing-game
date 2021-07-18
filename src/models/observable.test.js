import observableFactory from "./observable";

let observable;

describe("Observable factory", () => {
 let counter;

 beforeEach(() => {
  counter = 0;
  observable = observableFactory({
   property: "value",
  });
 });

 it("should be invoked immediately", () => {
  observable.addListener(_ => counter++);
  expect(counter).toBe(1);
 });

 it("should be invoked immediately when data updated", () => {
  observable.addListener(_ => counter++);
  observable.property = "updated value";
  expect(counter).toBe(2);
 });

 it("should detach event listener after invoking unsubscribe", () => {
  const unSubscribe = observable.addListener(_ => counter++);
  unSubscribe();
  observable.property = "updated value";
  expect(counter).toBe(1);
 });

 it("should be immutable", () => {
  observable.addListener(data => {
   expect(() => {
    data.property = "updated value";
   }).toThrow();
  });
 });
});
