import View from "./view";
import "./button.scss";
import CONSTANTS from "../constants";

let instance;

export default class Button extends View {
 constructor($button) {
  super($button);

  if (instance) return instance;
  instance = this;
  return instance;
 }

 setText(text) {
  this.element.innerText = text;
 }

 bindEvent() {
  this.on(CONSTANTS.CLICK, e => this._onClick(e));
 }

 _onClick(e) {
  this.emit(CONSTANTS.NAV, { detail: e });
 }

 setNavigate(to) {
  this.removeNavigate();
  this.element.setAttribute(CONSTANTS.NAV_DATASET, to);
 }

 removeNavigate() {
  this.element.removeAttribute(CONSTANTS.NAV_DATASET);
 }

 disabled(flag = true) {
  this.element.disabled = flag;
 }

 mount() {
  this.bindEvent();
  this.show();
 }

 unmount() {
  this.hide();
 }
}
