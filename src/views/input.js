import View from "./view";
import CONSTANTS from "../constants";
import "./input.scss";

export default class Input extends View {
 constructor($input) {
  super($input);
 }

 disabled(flag = false) {
  this.element.disabled = flag;
  return this;
 }

 focus() {
  this.element.focus();
  return this;
 }

 clear() {
  this.element.value = "";
  return this;
 }

 _onKeydown(e) {
  if (e.keyCode !== CONSTANTS.ENTER) return;
  this.emit(CONSTANTS.SUBMIT, { value: e.target.value });
 }

 bindEvent() {
  this.on(CONSTANTS.KEYDOWN, e => this._onKeydown(e));
  return this;
 }

 mount() {
  this.bindEvent();
  this.show();
 }

 unmount() {
  this.hide();
 }
}
