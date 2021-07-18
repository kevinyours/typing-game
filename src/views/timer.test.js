import Timer from "./timer";

describe("Timer", () => {
 let timer;
 let $span = document.createElement("span");

 beforeEach(() => {
  timer = new Timer($span);
  jest.useRealTimers();
  jest.clearAllMocks();
 });

 it("should have same instance", () => {
  expect(timer).toBeTruthy();
  expect(timer).toBeInstanceOf(Timer);
  expect($span).not.toBeNull();

  let secondTimer = new Timer(document.createElement("span"));

  expect(secondTimer).toBeInstanceOf(Timer);
  expect(timer).toEqual(secondTimer); // singleton
 });

 it("should manipulate text by its method", () => {
  const prefix = "prefix";
  const suffix = "suffiX";

  timer.setPrefix(prefix);
  timer.setSuffix(suffix);
  timer.resolve();
  expect($span.innerText).toEqual(`${prefix} ${10} ${suffix}`);

  timer.reset(100);
  expect($span.innerText).toEqual(`${prefix} ${100} ${suffix}`);
 });

 it("should be controlled visibility by its method", () => {
  const prefix = "prefix";
  const suffix = "suffiX";

  timer.setPrefix(prefix);
  timer.setSuffix(suffix);
  timer.reset(1000);

  timer.mount();
  expect($span.style.visibility).toBe("visible");

  timer.unmount();
  expect($span.style.visibility).toBe("hidden");
 });

 it("should provide stop watch function by tick method", async () => {
  jest.setTimeout(10000);

  timer.setPrefix("");
  timer.setSuffix("");
  timer.reset(9);
  timer.mount();
  timer.tick();

  expect(parseInt($span.innerText)).toBeLessThanOrEqual(10);

  await new Promise(r => setTimeout(r, 2000));

  expect(parseInt($span.innerText)).toBeLessThan(10);

  let cur = parseInt($span.innerText);

  timer.stop();

  expect(cur).toEqual(parseInt($span.innerText));

  timer.tick();

  await new Promise(r => setTimeout(r, 1000));

  expect(cur).not.toEqual(parseInt($span.innerText));
 });
});
