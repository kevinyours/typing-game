import Notice from "./notice";

describe("Notice", () => {
 let notice;

 let $p = document.createElement("p");

 let $title = document.createElement("span");
 $title.className = "title";

 let $summary = document.createElement("span");
 $summary.className = "summary";

 let $info = document.createElement("span");
 $info.className = "info";

 $p.appendChild($title);
 $p.appendChild($summary);
 $p.appendChild($info);

 beforeEach(() => {
  notice = new Notice($p);
  jest.clearAllMocks();
 });

 it("should render without crashing ", () => {
  expect(notice).toBeTruthy();
  expect($p).not.toBeNull();
  expect($title).not.toBeNull();
  expect($summary).not.toBeNull();
  expect($info).not.toBeNull();
  expect(notice).toBeInstanceOf(Notice);
 });

 it("should update texts by writeText method", () => {
  notice.writeText({ type: "title", text: "title" });
  notice.writeText({ type: "summary", text: "summary" });
  notice.writeText({ type: "info", text: "info" });
  notice.mount();

  expect($title.innerText).toEqual("title");
  expect($summary.innerText).toEqual("summary");
  expect($info.innerText).toEqual("info");
 });

 it("should erase texts emptyText method", () => {
  notice.writeText({ type: "title", text: "title" });
  notice.writeText({ type: "summary", text: "summary" });
  notice.writeText({ type: "info", text: "info" });
  notice.mount();

  expect($title.innerText).toEqual("title");
  expect($summary.innerText).toEqual("summary");
  expect($info.innerText).toEqual("info");

  notice.emptyText({ type: "title" });
  notice.emptyText({ type: "summary" });
  notice.emptyText({ type: "info" });

  expect($title.innerText).toEqual(null);
  expect($summary.innerText).toEqual(null);
  expect($info.innerText).toEqual(null);
 });

 it("should control visibility by its method", () => {
  notice.mount();
  expect($p.style.visibility).toBe("visible");

  notice.unmount();
  expect($p.style.visibility).toBe("hidden");
 });
});
