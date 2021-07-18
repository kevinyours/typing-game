import Input from "../views/input";
import Button from "../views/button";
import Number from "../views/number";
import Timer from "../views/timer";
import Notice from "../views/notice";

export default class Controller {
 constructor() {
  const timer = document.getElementById("timer");
  const score = document.getElementById("score");
  const input = document.querySelector("[type=text]");
  const notice = document.getElementById("notice");
  const primaryBtn = document.getElementById("primary-btn");

  this.$timer = new Timer(timer);
  this.$score = new Number(score);
  this.$input = new Input(input);
  this.$notice = new Notice(notice);
  this.$primaryBtn = new Button(primaryBtn);
 }
}
