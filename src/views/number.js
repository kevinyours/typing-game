import View from "./view";

export default class Number extends View {
 constructor($span, initNum = 10) {
  super($span);

  this.total = initNum;
  this.prefix = "";
  this.suffix = "";
 }

 setPrefix(text) {
  this.prefix = text;
 }

 setSuffix(text) {
  this.suffix = text;
 }

 resolve() {
  this.element.innerText = `${this.prefix} ${this.total} ${this.suffix}`;
 }

 reset(num) {
  this.total = num;
  this.resolve();
 }

 mount() {
  this.resolve();
  this.show();
 }

 unmount() {
  this.hide();
 }
}
