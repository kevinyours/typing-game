import View from "./view";

let instance = null;

export default class Timer extends View {
 constructor($span) {
  super($span);

  if (instance) return instance;

  this.time = 10;
  this.timer = () => {};

  instance = this;
  return instance;
 }

 setPrefix(text) {
  this.prefix = text;
 }

 setSuffix(text) {
  this.suffix = text;
 }

 resolve() {
  this.element.innerText = `${this.prefix} ${this.time} ${this.suffix}`;
 }

 reset(t) {
  this.time = t;
  this.resolve();
 }

 stop() {
  clearInterval(this.timer);
  this.timer = null;
 }

 tick() {
  this.stop();

  this.timer = setInterval(() => {
   this.time--;
   this.reset(this.time);
   if (this.time <= 0 || window.location.hash !== "#/quiz")
    return clearInterval(this.timer);
  }, 1000);
 }

 mount() {
  this.resolve();
  this.show();
 }

 unmount() {
  this.hide();
 }
}
